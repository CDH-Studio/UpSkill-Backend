"use strict";
const axios = require("axios");
require("dotenv").config();

async function getMygchrProfileInfo(searchValue) {
  return new Promise(async (resolve, reject) => {
    const url =
      process.env.UPSKILLMYGCHRAPIURL +
      "http://localhost:3030/employee-info-staging/" +
      encodeURI(searchValue);
    let info = [];
    await axios({
      methon: "get",
      url: url
      //   headers: {
      //     "user-key": process.env.GEDSAPIKEY,
      //     Accept: "application/json"
      //   }
    })
      .then(res => {
        if (res.status == 200) {
          info.push(res.data);
        }
        if (info.length == 0) {
          reject({ status: 204, statusText: "No content" });
        }
        resolve(info);
      })
      .catch(err => {
        console.error(err);
        if (err.response.status == 429) {
          reject({ status: 429, statusText: "Limit Exceeded" });
        }
      });
  });
}

module.exports = getMygchrProfileInfo;
