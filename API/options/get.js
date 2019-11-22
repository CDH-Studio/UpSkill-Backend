const Models = require("../../models");
const CareerMobility = Models.careerMobility;
const Competency = Models.competency;
const Diploma = Models.diploma;
const GroupLevel = Models.groupLevel;
const KeyCompetency = Models.keyCompetency;
const Location = Models.location;
const School = Models.school;
const SecurityClearance = Models.securityClearance;
const Skill = Models.skill;
const TalentMatrixResult = Models.talentMatrixResult;
const Tenure = Models.tenure;

const getCareerMobility = async (request, response) => {
  let all = await CareerMobility.findAll();
  let resBody = all.map(one => {
    one = one.dataValues;
    return {
      id: one.id,
      description: { en: one.descriptionEn, fr: one.descriptionFr }
    };
  });
  response.status(200).json(resBody);
};

const getCompetency = async (request, response) => {
  let all = await Skill.findAll({
    where: {
      type: "competency"
    }
  });
  let resBody = all.map(one => {
    one = one.dataValues;
    return {
      id: one.id,
      description: { en: one.descriptionEn, fr: one.descriptionFr }
    };
  });
  response.status(200).json(resBody);
};

const getDevelopmentalGoals = async (request, response) => {
  let all = await Skill.findAll();
  let resBody = all.map(one => {
    one = one.dataValues;
    return {
      id: one.id,
      description: { en: one.descriptionEn, fr: one.descriptionFr }
    };
  });
  response.status(200).json(resBody);
};

const getDiploma = async (request, response) => {
  let all = await Diploma.findAll();
  let resBody = all.map(one => {
    one = one.dataValues;
    return {
      id: one.id,
      description: { en: one.descriptionEn, fr: one.descriptionFr }
    };
  });
  response.status(200).json(resBody);
};

const getGroupLevel = async (request, response) => {
  let all = await GroupLevel.findAll();
  let resBody = all.map(one => {
    one = one.dataValues;
    return {
      id: one.id,
      description: one.description
    };
  });
  response.status(200).json(resBody);
};

const getKeyCompetency = async (request, response) => {
  let all = await KeyCompetency.findAll();
  let resBody = all.map(one => {
    one = one.dataValues;
    return {
      id: one.id,
      description: { en: one.descriptionEn, fr: one.descriptionFr }
    };
  });
  response.status(200).json(resBody);
};

const getLocation = async (request, response) => {
  let all = await Location.findAll();
  let resBody = all.map(one => {
    one = one.dataValues;
    return {
      id: one.id,
      description: {
        en: one.addressEn + ", " + one.city + ", " + one.provinceEn,
        fr: one.addressFr + ", " + one.city + ", " + one.provinceFr
      }
    };
  });
  response.status(200).json(resBody);
};

const getSchool = async (request, response) => {
  let all = await School.findAll();
  let resBody = all.map(one => {
    one = one.dataValues;
    return {
      id: one.id,
      description: one.description
    };
  });
  response.status(200).json(resBody);
};

const getSecurityClearance = async (request, response) => {
  let all = await SecurityClearance.findAll();
  let resBody = all.map(one => {
    one = one.dataValues;
    return {
      id: one.id,
      description: { en: one.descriptionEn, fr: one.descriptionFr }
    };
  });
  response.status(200).json(resBody);
};

const getSkill = async (request, response) => {
  let all = await Skill.findAll({
    where: {
      type: "skill"
    }
  });
  let resBody = all.map(one => {
    one = one.dataValues;
    return {
      id: one.id,
      description: { en: one.descriptionEn, fr: one.descriptionFr }
    };
  });
  response.status(200).json(resBody);
};

const getTalentMatrixResult = async (request, response) => {
  let all = await TalentMatrixResult.findAll();
  let resBody = all.map(one => {
    one = one.dataValues;
    return {
      id: one.id,
      description: { en: one.descriptionEn, fr: one.descriptionFr }
    };
  });
  response.status(200).json(resBody);
};

const getTenure = async (request, response) => {
  let all = await Tenure.findAll();
  let resBody = all.map(one => {
    one = one.dataValues;
    return {
      id: one.id,
      description: { en: one.descriptionEn, fr: one.descriptionFr }
    };
  });
  response.status(200).json(resBody);
};

module.exports = {
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
};
