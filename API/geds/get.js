"use strict";
const axios = require("axios");
require("dotenv").config();

async function getEmployeeInfo(request, response) {
  let searchValue = request.params.searchValue;
  const url =
    "https://geds-sage-ssc-spc-apicast-production.api.canada.ca/gapi/v2/employees?searchValue=" +
    encodeURI(searchValue) +
    "&searchField=9&searchCriterion=2&searchScope=sub&searchFilter=2&maxEntries=1000";

  let info = [];

  // await axios({
  //   methon: "get",
  //   url: url,
  //   headers: {
  //     "user-key": process.env.GEDSAPIKEY1,
  //     Accept: "application/json"
  //   }
  // })
  //   .then(res => {

  const res = {
    status: 200,
    data: [
      {
        id:
          "Q049UklaVkkuUkFCQENBTkFEQS5DQSxPVT1CTFNELURTTEEsT1U9RFNELURTTixPVT1DSU8tQlBJLE9VPURUU1MtU1NUTixPVT1JU0VELUlTREUsTz1HQyxDPUNB",
        resourceType: 1,
        surname: "Rab",
        givenName: "Rizvi",
        initials: "",
        title: {
          en: "Developer",
          fr: "Développeur(se)"
        },
        contactInformation: {
          phoneNumber: "",
          altPhoneNumber: "",
          faxNumber: "",
          tddNumber: "",
          securePhoneNumber: "",
          secureFaxNumber: "",
          email: ""
        },
        addressInformation: {
          address: {
            en: "235 Queen Street",
            fr: "235, rue Queen"
          },
          city: {
            en: "Ottawa",
            fr: "Ottawa"
          },
          province: {
            en: "Ontario",
            fr: "Ontario"
          },
          country: {
            en: "Canada",
            fr: "Canada"
          },
          pc: "K1A 0H5",
          pobox: {
            en: "",
            fr: ""
          },
          mailstop: ""
        },
        buildingInformation: {
          building: {
            en: "",
            fr: ""
          },
          floor: "",
          room: ""
        },
        adminAssistantInformation: {
          name: "",
          phoneNumber: ""
        },
        execAssistantInformation: {
          name: "",
          phoneNumber: ""
        },
        updateInformation: {
          createTimestamp: "2019-09-04T13:49:52Z",
          modifyTimestamp: "2019-09-05T17:49:41Z"
        }
      }
    ]
  };

  if (res.status == 200) {
    res.data.forEach(employee => {
      let currentBranch = employee;
      let organizations = [];
      while (currentBranch.organizationInformation != null) {
        let branchInfo = {
          organizationId: currentBranch.organizationInformation.organization.id,
          organization: {
            addressInformation:
              currentBranch.organizationInformation.organization
                .addressInformation,
            description:
              currentBranch.organizationInformation.organization.description
          }
        };
        organizations.push(branchInfo);
        currentBranch = currentBranch.organizationInformation.organization;
      }
      organizations = organizations.reverse();

      let contactInfo = {};

      if (employee.contactInformation.email != "")
        contactInfo.email = employee.contactInformation.email;
      if (employee.contactInformation.phoneNumber != "")
        contactInfo.phoneNumber = employee.contactInformation.phoneNumber;
      if (employee.contactInformation.altPhoneNumber != "")
        contactInfo.altPhoneNumber = employee.contactInformation.altPhoneNumber;

      let empInfo = {
        id: employee.id,
        givenName: employee.givenName,
        surname: employee.surname,
        title: employee.title,

        organizations: organizations,
        ...contactInfo
      };
      info.push(empInfo);
    });
    if (info.length == 0) {
      response.status(204).send("No results found");
      return;
    }

    response.status(200).json(info);
  } else {
    response.status(res.status).send(res.statusText);
    return;
  }
  // })
  // .catch(err => {
  //   console.error(err);
  //   if (err.response.status == 429) {
  //     response.status(429).send("Limit Exceeded!");
  //     return;
  //   }
  // });
}

module.exports = {
  getEmployeeInfo
};
