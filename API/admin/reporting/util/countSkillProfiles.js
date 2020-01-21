const Models = require("../../../../models");

const Skills = Models.skill; // skill.js
const ProfileSkills = Models.profileSkills; // profileSkills.js

const countSkillProfiles = async () => {
  const occurences = {}; // {descriptionEn, descriptionFr, profileCount}

  const getRows = await Skills.findAll();

  // console.log("Output: ", getRows);

  getRows.forEach(row => {
    const descriptionEn = row.descriptionEn;
    console.log("Skill: ", descriptionEn);
    const descriptionFr = row.descriptionFr;

    const count = ProfileSkills.count({ where: { skillId: row.id } });

    occurences.push([descriptionEn, descriptionFr, count]);
  });

  //console.log("Occurences", occurences);
  return occurences;
};

module.exports = countSkillProfiles;
