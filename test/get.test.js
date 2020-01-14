const get = require("../API/user/get");

// Allows jest to track sequelize-mock:
// jest.mock("../models/user", () => {
//   const SequelizeMock = require("sequelize-mock");
//   const dbMock = new SequelizeMock();
//   return dbMock.define("user", {
//     name: "John Doe",
//     email: "john.doe@canada.ca",
//     inactive: false
//   });
// });

// sequelize.$overrideImport('./users/model.js', './users/mock.js');

const SequelizeMock = require("sequelize-mock");

const dbMock = new SequelizeMock();

const UserMock = dbMock.define("user", {
  id: "0a",
  name: "John Doe",
  email: "john.doe@canada.ca",
  inactive: false
});

jest.mock("sequelize-mock");

const mockRequest = data => {
  const req = {};
  req.id = data;
  //return { ...data };
};

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

describe("getUserInfo", () => {
  it("Should get user from mock", async () => {
    const req = mockRequest("247ed9ea-30c2-11ea-aee3-af83807df973");

    const res = mockResponse();

    //dbMock.mockImplementationOnce(() => Promise.resolve(mockUserData));

    const user = await get.getUserById(req, res);

    expect(user.name).toEqual("Sukhsimranpreet Singh Sekhon");
  });
});

const mockUserData = {
  data: [
    {
      id: "247ed9ea-30c2-11ea-aee3-af83807df973",
      name: "Sukhsimranpreet Singh Sekhon",
      email: "sukhsimranpreetsingh.sekhon@canada.ca",
      inactive: false
    }
  ]
};

module.exports = {
  mockRequest,
  mockResponse
};
