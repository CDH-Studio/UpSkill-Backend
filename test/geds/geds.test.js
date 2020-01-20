const axios = require("axios");

const geds = require("../../API/geds");

//Allows jest to track axios
jest.mock("axios");

const mockRequest = data => {
  return { ...data };
};

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

describe("getEmployeeInfo", () => {
  it("should expect results from geds", async () => {
    const req = mockRequest({ params: { searchValue: "Java ES Script" } });
    const res = mockResponse();

    //Will force axios calls to return mockGedsData once
    axios.mockImplementationOnce(() => Promise.resolve(mockGedsData));

    await geds.getEmployeeInfo(req, res);

    expect(axios).toHaveBeenCalledWith({
      headers: {
        Accept: "application/json",
        "user-key": process.env.GEDSAPIKEY1
      },
      methon: "get",
      url:
        "https://geds-sage-ssc-spc-apicast-production.api.canada.ca/gapi/v2/employees?searchValue=Java%20ES%20Script&searchField=9&searchCriterion=2&searchScope=sub&searchFilter=2&maxEntries=1000"
    });

    expect(res.status).toHaveBeenCalledWith(200);

    //toMatchInlineSnapshot will automatically create snapshot
    expect(res.json).toMatchInlineSnapshot(`
      [MockFunction] {
        "calls": Array [
          Array [
            Array [
              Object {
                "altPhoneNumber": "123-456-7890",
                "givenName": "Java",
                "id": "jn32412n34p1o3u412341no23n4p1234unp12341o2i3n4up1==",
                "organizations": Array [],
                "phoneNumber": "613-123-5678",
                "surname": "Docs",
                "title": Object {
                  "en": "Senior Analyst",
                  "fr": "Analyste principal",
                },
              },
              Object {
                "email": "Java.Bean@tc.gc.ca",
                "givenName": "Java",
                "id": "3uo4hn13u4np13u4n1o234ynp1234ynp1234np13u4np123un4p123n41==",
                "organizations": Array [],
                "phoneNumber": "613-123-5412",
                "surname": "Bean",
                "title": Object {
                  "en": "Receiving Inspector",
                  "fr": "Inspecteur à la réception",
                },
              },
            ],
          ],
        ],
        "results": Array [
          Object {
            "type": "return",
            "value": Object {
              "json": [MockFunction] {
                "calls": Array [
                  Array [
                    Array [
                      Object {
                        "altPhoneNumber": "123-456-7890",
                        "givenName": "Java",
                        "id": "jn32412n34p1o3u412341no23n4p1234unp12341o2i3n4up1==",
                        "organizations": Array [],
                        "phoneNumber": "613-123-5678",
                        "surname": "Docs",
                        "title": Object {
                          "en": "Senior Analyst",
                          "fr": "Analyste principal",
                        },
                      },
                      Object {
                        "email": "Java.Bean@tc.gc.ca",
                        "givenName": "Java",
                        "id": "3uo4hn13u4np13u4n1o234ynp1234ynp1234np13u4np123un4p123n41==",
                        "organizations": Array [],
                        "phoneNumber": "613-123-5412",
                        "surname": "Bean",
                        "title": Object {
                          "en": "Receiving Inspector",
                          "fr": "Inspecteur à la réception",
                        },
                      },
                    ],
                  ],
                ],
                "results": [Circular],
              },
              "send": [MockFunction],
              "status": [MockFunction] {
                "calls": Array [
                  Array [
                    200,
                  ],
                ],
                "results": Array [
                  Object {
                    "type": "return",
                    "value": [Circular],
                  },
                ],
              },
            },
          },
        ],
      }
    `);
  });

  it("should fail if 429", async () => {
    const req = mockRequest({ params: { searchValue: "Java Script" } });
    const res = mockResponse();

    //Will force axios calls to return mockGedsData once
    axios.mockImplementationOnce(() =>
      Promise.reject({ response: { status: 429 } })
    );

    await geds.getEmployeeInfo(req, res);

    expect(axios).toHaveBeenCalledWith({
      headers: {
        Accept: "application/json",
        "user-key": process.env.GEDSAPIKEY1
      },
      methon: "get",
      url:
        "https://geds-sage-ssc-spc-apicast-production.api.canada.ca/gapi/v2/employees?searchValue=Java%20ES%20Script&searchField=9&searchCriterion=2&searchScope=sub&searchFilter=2&maxEntries=1000"
    });

    expect(res.status).toHaveBeenCalledWith(429);

    //toMatchInlineSnapshot will automatically create snapshot
    expect(res.send).toMatchInlineSnapshot(`
      [MockFunction] {
        "calls": Array [
          Array [
            "Limit Exceeded!",
          ],
        ],
        "results": Array [
          Object {
            "type": "return",
            "value": Object {
              "json": [MockFunction],
              "send": [MockFunction] {
                "calls": Array [
                  Array [
                    "Limit Exceeded!",
                  ],
                ],
                "results": [Circular],
              },
              "status": [MockFunction] {
                "calls": Array [
                  Array [
                    429,
                  ],
                ],
                "results": Array [
                  Object {
                    "type": "return",
                    "value": [Circular],
                  },
                ],
              },
            },
          },
        ],
      }
    `);
  });

  it("should return 204 if no content", async () => {
    const req = mockRequest({ params: { searchValue: "Java Script" } });
    const res = mockResponse();

    //Will force axios calls to return mockGedsData once
    axios.mockImplementationOnce(() =>
      Promise.resolve({ data: [], status: 200 })
    );

    await geds.getEmployeeInfo(req, res);

    expect(axios).toHaveBeenCalledWith({
      headers: {
        Accept: "application/json",
        "user-key": process.env.GEDSAPIKEY1
      },
      methon: "get",
      url:
        "https://geds-sage-ssc-spc-apicast-production.api.canada.ca/gapi/v2/employees?searchValue=Java%20ES%20Script&searchField=9&searchCriterion=2&searchScope=sub&searchFilter=2&maxEntries=1000"
    });

    expect(res.status).toHaveBeenCalledWith(204);

    //toMatchInlineSnapshot will automatically create snapshot
    expect(res.send).toMatchInlineSnapshot(`
      [MockFunction] {
        "calls": Array [
          Array [
            "No results found",
          ],
        ],
        "results": Array [
          Object {
            "type": "return",
            "value": Object {
              "json": [MockFunction],
              "send": [MockFunction] {
                "calls": Array [
                  Array [
                    "No results found",
                  ],
                ],
                "results": [Circular],
              },
              "status": [MockFunction] {
                "calls": Array [
                  Array [
                    204,
                  ],
                ],
                "results": Array [
                  Object {
                    "type": "return",
                    "value": [Circular],
                  },
                ],
              },
            },
          },
        ],
      }
    `);
  });

  it("should return pass any error from geds", async () => {
    const req = mockRequest({ params: { searchValue: "Java Script" } });
    const res = mockResponse();

    //Will force axios calls to return mockGedsData once
    axios.mockImplementationOnce(() =>
      Promise.resolve({ data: [], status: 888, statusText: "Random error" })
    );

    await geds.getEmployeeInfo(req, res);

    expect(axios).toHaveBeenCalledWith({
      headers: {
        Accept: "application/json",
        "user-key": process.env.GEDSAPIKEY1
      },
      methon: "get",
      url:
        "https://geds-sage-ssc-spc-apicast-production.api.canada.ca/gapi/v2/employees?searchValue=Java%20ES%20Script&searchField=9&searchCriterion=2&searchScope=sub&searchFilter=2&maxEntries=1000"
    });

    expect(res.status).toHaveBeenCalledWith(888);

    //toMatchInlineSnapshot will automatically create snapshot
    expect(res.send).toMatchInlineSnapshot(`
      [MockFunction] {
        "calls": Array [
          Array [
            "Random error",
          ],
        ],
        "results": Array [
          Object {
            "type": "return",
            "value": Object {
              "json": [MockFunction],
              "send": [MockFunction] {
                "calls": Array [
                  Array [
                    "Random error",
                  ],
                ],
                "results": [Circular],
              },
              "status": [MockFunction] {
                "calls": Array [
                  Array [
                    888,
                  ],
                ],
                "results": Array [
                  Object {
                    "type": "return",
                    "value": [Circular],
                  },
                ],
              },
            },
          },
        ],
      }
    `);
  });
});

const mockGedsData = {
  data: [
    {
      id: "jn32412n34p1o3u412341no23n4p1234unp12341o2i3n4up1==",
      resourceType: 0,
      surname: "Docs",
      givenName: "Java",
      initials: "",
      title: {
        en: "Senior Analyst",
        fr: "Analyste principal"
      },
      contactInformation: {
        phoneNumber: "613-123-5678",
        altPhoneNumber: "123-456-7890",
        faxNumber: "",
        tddNumber: "",
        securePhoneNumber: "",
        secureFaxNumber: "",
        email: ""
      },
      addressInformation: {
        address: {
          en: "85 Shock Street",
          fr: "85, rue Shock"
        },
        city: {
          en: "England",
          fr: "England"
        },
        province: {
          en: "Ontario",
          fr: "Ontario"
        },
        country: {
          en: "Canada",
          fr: "Canada"
        },
        pc: "asdv asdfb",
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
        createTimestamp: "2003-10-31T23:34:51Z",
        modifyTimestamp: "2019-01-28T18:44:13Z"
      }
    },
    {
      id: "3uo4hn13u4np13u4n1o234ynp1234ynp1234np13u4np123un4p123n41==",
      resourceType: 0,
      surname: "Bean",
      givenName: "Java",
      initials: "JS",
      title: {
        en: "Receiving Inspector",
        fr: "Inspecteur à la réception"
      },
      contactInformation: {
        phoneNumber: "613-123-5412",
        altPhoneNumber: "",
        faxNumber: "613-132-4321",
        tddNumber: "",
        securePhoneNumber: "",
        secureFaxNumber: "",
        email: "Java.Bean@tc.gc.ca"
      },
      addressInformation: {
        address: {
          en: "200 Woah Private",
          fr: "200 Privé Woah"
        },
        city: {
          en: "England",
          fr: "England"
        },
        province: {
          en: "Ontario",
          fr: "Ontario"
        },
        country: {
          en: "Canada",
          fr: "Canada"
        },
        pc: "ABC 123",
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
        createTimestamp: "2020-07-22T05:39:00Z",
        modifyTimestamp: "2020-07-31T04:41:29Z"
      }
    }
  ],
  status: 200
};
