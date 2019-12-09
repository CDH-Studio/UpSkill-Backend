const { Router } = require("express");
const {
  getBranch,
  getCareerMobility,
  getCompetency,
  getDevelopmentalGoals,
  getDiploma,
  getGroupLevel,
  getKeyCompetency,
  getLocation,
  getSchool,
  getSecurityClearance,
  getSkill,
  getTalentMatrixResult,
  getTenure
} = require("./get");
const optionRouter = Router();

optionRouter.get("/getBranch", getBranch);
optionRouter.get("/getCareerMobility", getCareerMobility);
optionRouter.get("/getCompetency", getCompetency);
optionRouter.get("/getDevelopmentalGoals", getDevelopmentalGoals);
optionRouter.get("/getDiploma", getDiploma);
optionRouter.get("/getGroupLevel", getGroupLevel);
optionRouter.get("/getKeyCompetency", getKeyCompetency);
optionRouter.get("/getLocation", getLocation);
optionRouter.get("/getSchool", getSchool);
optionRouter.get("/getSecurityClearance", getSecurityClearance);
optionRouter.get("/getSkill", getSkill);
optionRouter.get("/getTalentMatrixResult", getTalentMatrixResult);
optionRouter.get("/getTenure", getTenure);

module.exports = optionRouter;
