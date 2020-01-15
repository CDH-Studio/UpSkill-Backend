// Import the mock library
const SequelizeMock = require("sequelize-mock");

// Setup the mock database connection
const DBConnectionMock = new SequelizeMock();

// Define our Model
const UserMock = DBConnectionMock.define("user", {
  id: "247ed9ea-30c2-11ea-aee3-af83807df973",
  name: "Sukhsimranpreet Singh Sekhon",
  email: "sukhsimranpreetsingh.sekhon@canada.ca",
  inactive: false
});

// You can also associate mock models as well
const GroupMock = DBConnectionMock.define("groups", {
  name: "My Awesome Group"
});

UserMock.belongsTo(GroupMock);

const mock = jest.fn().mockImplementation(() => {
  return { user: UserMock };
});

// mock.user.findAll().then(data => console.log(data));

module.exports = { user: UserMock };
