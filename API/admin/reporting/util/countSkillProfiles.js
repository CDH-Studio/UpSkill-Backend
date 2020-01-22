const Models = require("../../../../models");

const Migration = require("../../../../migrations/20191101141536-add-skill-associations");

const Skills = Models.skill; // skill.js
const ProfileSkills = Migration[0].up;

const countSkillProfiles = async () => {
  const occurences = {}; // {descriptionEn, descriptionFr, profileCount}

  const getRows = await Skills.findAll({
    where: {
      type: "skill"
    }
  });

  // console.log("Output: ", getRows);

  getRows.forEach(row => {
    const descriptionEn = row.descriptionEn;

    // console.log("Skill: ", descriptionEn);

    const descriptionFr = row.descriptionFr;

    const id = row.id;

    // console.log("Skill ID: ", id);

    const amount = ProfileSkills.count({ where: { skillId: id } });

    occurences.push([descriptionEn, descriptionFr, amount]);
  });

  // console.log("Occurences", occurences);
  return occurences;
};

module.exports = countSkillProfiles;
