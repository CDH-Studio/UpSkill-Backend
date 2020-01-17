// Import the mock library
const SequelizeMock = require("sequelize-mock");

// Setup the mock database connection
const DBConnectionMock = new SequelizeMock();

// Define our Model
const UserMock = DBConnectionMock.define("user", {
  id: "012345",
  name: "Sukhu Sekhon",
  email: "john.doe@canada.ca",
  inactive: false
});

// You can also associate mock models as well
// const GroupMock = DBConnectionMock.define("groups", {
//   name: "My Awesome Group"
// });

// UserMock.belongsTo(GroupMock);

// const ProfileMock = DBConnectionMock.define("profile", {
//   id: "b0d410be-30c1-11ea-89a8-d3732f9abb69",
//   name: "John Doe1",
//   email: "john.doe1@canada.ca",
//   flagged: false
// });

// UserMock.belongsTo(ProfileMock, {
//   foreignKey: { fieldName: "id" }
// });

// mock.user.findAll().then(data => console.log(data));

module.exports = { user: UserMock };
