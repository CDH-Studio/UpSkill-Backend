// Create a Sequelize instance
const Sequelize = require("sequelize");

require("dotenv").config();

// Option 1: Passing parameters separately
module.exports = new Sequelize(
  // process.env.DATABASE_URL,
  process.env.PGDATABASE,
  process.env.PGUSERNAME,
  process.env.PGPASS,
  {
    uri: process.env.PGHOST,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    logging: false
  }
);
