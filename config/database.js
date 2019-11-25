// Create a Sequelize instance
const Sequelize = require("sequelize");

require("dotenv").config();

let [host, port] = process.env.PGHOST.split(":");

console.log("PGHOST:", process.env.PGHOST);

console.log(host, port);

// Option 1: Passing parameters separately
module.exports = new Sequelize(
  // process.env.DATABASE_URL,
  process.env.PGDATABASE,
  process.env.PGUSERNAME,
  process.env.PGPASS,
  {
    host: host,
    port: port,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);
