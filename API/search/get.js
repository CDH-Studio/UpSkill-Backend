const sequelize = require("sequelize");
const Op = sequelize.Op;

const utils = require("./util");

const search = async (request, response) => {
  const query = request.query;

  let results = await utils
    .getAllProfiles(query.searchValue | "")
    .then(res => res);

  if (query.searchValue) {
    results = await utils.fuzzySearch(results, query.searchValue);
  }

  // if (query.skills) results = await utils.skillSearch(results, query.skills);

  response.status(200).json(results);
};
module.exports = search;
