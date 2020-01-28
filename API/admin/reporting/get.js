// const Models = require("../../../models");

const utils = require("./util");

const statistics = async (request, response) => {
  let skillCount = await utils.countSkillProfiles().then(res => res);
  let compCount = await utils.countCompetencyProfiles().then(res => res);
  let developCount = await utils.countDevelopmentGoals().then(res => res);
  let flaggedProfiles = await utils.flaggedProfiles().then(res => res);
  let growthRateByMonth = await utils.growthRateByMonth().then(res => res);
  let growthRateByWeek = await utils.growthRateByWeek().then(res => res);

  response.status(200).json({
    growthRateByWeek: growthRateByWeek,
    growthRateByMonth: growthRateByMonth,
    flaggedProfiles: flaggedProfiles,
    developCount: developCount,
    skillCount: skillCount,
    compCount: compCount
  });
};
module.exports = { statistics };
