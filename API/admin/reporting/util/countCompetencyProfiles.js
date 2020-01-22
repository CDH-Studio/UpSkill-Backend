const Sequelize = require("sequelize");
const Models = require("../../../../models");
const Skills = Models.skill; // Skills Table
const Profiles = Models.profile; // Profiles Table

const countCompetencyProfiles = async () => {
  const profileCompetencies = await Skills.findAll({
    // (Competency ID (id), descriptionEn, descriptionFr, Count Profile Occurences (countOccurences)}
    group: ["skill.id"],
    includeIgnoreAttributes: false,
    where: { type: "competency" },
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
  return profileCompetencies;
};

module.exports = countCompetencyProfiles;
