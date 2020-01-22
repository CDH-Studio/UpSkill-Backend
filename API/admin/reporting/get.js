// const Models = require("../../../models");

const utils = require("./util");

const statistics = async (request, response) => {
  // let results = await utils.countSkillProfiles().then(res => res);
  let results = await utils.countCompetencyProfiles().then(res => res);

  response.status(200).json(results);
};
module.exports = { statistics };
