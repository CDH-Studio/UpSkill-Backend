const get = require("../API/user/get");
const Models = require("../models");

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
// Import the mock library
var SequelizeMock = require("sequelize-mock");

// Setup the mock database connection
var DBConnectionMock = new SequelizeMock();

// Define our Model
var UserMock = DBConnectionMock.define("user", {
  id: "247ed9ea-30c2-11ea-aee3-af83807df973",
  name: "Sukhsimranpreet Singh Sekhon",
  email: "sukhsimranpreetsingh.sekhon@canada.ca",
  inactive: false
});

// You can also associate mock models as well
var GroupMock = DBConnectionMock.define("groups", {
  name: "My Awesome Group"
});

UserMock.belongsTo(GroupMock);

const mockRequest = data => {
  const req = {};
  req.params = { id: data };
  return req;
};

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

jest.mock("../models", () => {
  return { user: jest.fn() };
});

Models.user.mockImplementation(() => {
  return DBConnectionMock.define("user", {
    id: "247ed9ea-30c2-11ea-aee3-af83807df973",
    name: "Sukhsimranpreet Singh Sekhon",
    email: "sukhsimranpreetsingh.sekhon@canada.ca",
    inactive: false
  });
});

describe("getUserInfo", () => {
  it("Should get user from mock", async () => {
    const req = mockRequest("247ed9ea-30c2-11ea-aee3-af83807df973");

    const res = mockResponse();

    //dbMock.mockImplementationOnce(() => Promise.resolve(mockUserData));

    await get.getUserById(req, res).then(data => {
      console.log(data);
      expect(data.name).toEqual("Sukhsimranpreet Singh Sekhon");
    });
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
