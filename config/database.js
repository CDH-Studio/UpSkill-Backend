// Create a Sequelize instance
const Sequelize = require("sequelize");

// Option 1: Passing parameters separately
module.exports = new Sequelize("dev_database", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
