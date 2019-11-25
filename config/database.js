// Create a Sequelize instance
const Sequelize = require("sequelize");

require("dotenv").config();

const str = process.env.PGHOST;

const host = str.substring(0, str.lastIndexOf(":"));
const port = str.substring(str.lastIndexOf(":") + 1, str.length);
console.log(host);
console.log(port);
console.log("PGHOST:", process.env.PGHOST);

// Option 1: Passing parameters separately
module.exports = new Sequelize(
  process.env.DATABASE_URL
  // process.env.PGDATABASE,
  // process.env.PGUSERNAME,
  // process.env.PGPASS,
  // {
  //   host: host,
  //   port: port,
  //   dialect: "postgres",
  //   pool: {
  //     max: 5,
  //     min: 0,
  //     acquire: 30000,
  //     idle: 10000
  //   }
  // }
);
