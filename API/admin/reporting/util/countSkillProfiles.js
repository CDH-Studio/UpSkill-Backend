const Sequelize = require("sequelize");
const Models = require("../../../../models");

const Skills = Models.skill; // skill.js
const Profiles = Models.profile; // skill.js

const countSkillProfiles = async () => {
  // const occurences = {}; // {descriptionEn, descriptionFr, profileCount}

  // const hi = await Skills.findAll({
  //   // group: ["skill.id"],
  //   attributes: {
  //     include: [
  //       (Sequelize.fn("COUNT", Sequelize.col("profiles.id")), "descriptionEn")
  //     ]
  //   },
  //   include: [
  //     {
  //       model: Profiles,
  //       attributes: []
  //     }
  //   ]
  // });

  const profileSkills = await Skills.findAll({
    group: ["skill.id"],
    includeIgnoreAttributes: false,
    where: { type: "skill" },
    include: [
      {
        model: Profiles,
        attributes: ["id"]
      }
    ],
    attributes: [
      "id",
      "descriptionEn",
      "descriptionFr",
      [Sequelize.fn("COUNT", Sequelize.col("profiles.id")), "countOccurences"]
    ],
    order: [[Sequelize.fn("COUNT", Sequelize.col("profiles.id")), "DESC"]]
  });

  // console.log(profileSkills);

  // const getRows = await Skills.findAll({
  //   where: {
  //     type: "skill"
  //   }
  // });

  // // console.log("Output: ", getRows);

  // getRows.forEach(row => {
  //   const descriptionEn = row.descriptionEn;

  //   // console.log("Skill: ", descriptionEn);

  //   const descriptionFr = row.descriptionFr;

  //   const id = row.id;

  //   // console.log("Skill ID: ", id);

  //   occurences.push([descriptionEn, descriptionFr, amount]);
  // });

  // // console.log("Occurences", occurences);
  // return occurences;
  return profileSkills;
};

module.exports = countSkillProfiles;
