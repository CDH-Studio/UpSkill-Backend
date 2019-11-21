"use strict";
const axios = require("axios");

async function getEmployeeInfo(request, response) {
  let searchValue = request.params.searchValue;
  const url =
    "https://geds-sage-ssc-spc-apicast-production.api.canada.ca/gapi/v2/employees?searchValue=" +
    encodeURI(searchValue) +
    "&searchField=9&searchCriterion=2&searchScope=sub&searchFilter=2&maxEntries=1000";

  let info = [];

  await axios({
    methon: "get",
    url: url,
    headers: {
      "user-key": "1d373575a287c2597f4525d0c26eae7d",
      // "user-key": "a4b8d0891e09354b46bbe061c72a7085",
      Accept: "application/json"
    }
  })
    .then(res => {
      if (res.status == 200) {
        res.data.forEach(employee => {
          let currentBranch = employee;
          let organizations = [];
          while (currentBranch.organizationInformation != null) {
            let branchInfo = {
              organizationId:
                currentBranch.organizationInformation.organization.id,
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
            contactInfo.altPhoneNumber =
              employee.contactInformation.altPhoneNumber;

          let empInfo = {
            id: employee.id,
            givenName: employee.givenName,
            surname: employee.surname,
            title: employee.title,

            organizations: organizations,
            ...contactInfo
          };
          info.push(empInfo);
          console.log(empInfo);
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
    })
    .catch(err => {
      console.log(err);
      if (err.response.status == 429) {
        response.status(429).send("Limit Exceeded!");
        return;
      }
    });
}

module.exports = {
  getEmployeeInfo
};
