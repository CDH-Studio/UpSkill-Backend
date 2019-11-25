require("dotenv").config();
module.exports = {
  development: {
    username: process.env.PGUSERNAME,
    password: process.env.PGPASS,
    database: process.env.PGDATABASE,
    uri: process.env.PGHOST,
    dialect: "postgres"
  },
  production: {
    username: process.env.PGUSERNAME,
    password: process.env.PGPASS,
    database: process.env.PGDATABASE,
    uri: process.env.PGHOST,
    dialect: "postgres"
  },
  staging: {
    uri: process.env.DATABASE_URL,
    dialect: "postgres"
  }
};