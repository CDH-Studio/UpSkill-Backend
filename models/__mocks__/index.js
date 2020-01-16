// Import the mock library
const SequelizeMock = require("sequelize-mock");

// Setup the mock database connection
const DBConnectionMock = new SequelizeMock();

// Define our Model
const UserMock = DBConnectionMock.define("user", [
  {
    id: "b0d410be-30c1-11ea-89a8-d3732f9abb69",
    name: "John Doe",
    email: "john.doe@canada.ca",
    inactive: false
  },
  {
    id: "faba08aa-ffe3-11e9-8d71-362b9e155667",
    name: "Mary Doe",
    email: "mary.doe@canada.ca",
    inactive: false
  },
  {
    id: "247bc9za-30d2-11wq-dff3-a8j3807ty973",
    name: "Sir Bobby Hall",
    email: "bobby.hall@canada.ca",
    inactive: true
  }
]);

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
