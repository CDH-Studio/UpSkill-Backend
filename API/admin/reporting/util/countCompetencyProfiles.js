const Sequelize = require("sequelize");
const Models = require("../../../../models");
const Skills = Models.skill; // Skills Table
const Profiles = Models.profile; // Profiles Table

const sequelize = Models.sequelize;

const countCompetencyProfiles = async () => {
  // const profileCompetencies = await Skills.findAll({
  //   // (Competency ID (id), descriptionEn, descriptionFr, Count Profile Occurences (countOccurences)}
  //   group: ["skill.id"],
  //   includeIgnoreAttributes: false,
  //   where: { type: "competency" },
  //   include: {
  //     association: "competencies",
  //     attributes: ["id"]
  //   },
  //   attributes: [
  //     "id",
  //     "descriptionEn",
  //     "descriptionFr",
  //     [Sequelize.fn("COUNT", Sequelize.col("profiles.id")), "countOccurences"]
  //   ],
  //   order: [[Sequelize.fn("COUNT", Sequelize.col("profiles.id")), "DESC"]]
  // });

  const profileCompetencies = await sequelize.query(
    `SELECT
        "skill"."id",
        "skill"."descriptionEn",
        "skill"."descriptionFr",
        COUNT("profiles"."id") AS "countOccurences"
      FROM "skills" AS "skill"
      LEFT OUTER JOIN (
          "profileCompetencies" AS "profiles->profileCompetencies"
          INNER JOIN "profiles" AS "profiles" ON "profiles"."id" = "profiles->profileCompetencies"."profileId"
        ) ON "skill"."id" = "profiles->profileCompetencies"."skillId"
      WHERE
        "skill"."type" = 'competency'
      GROUP BY
        "skill"."id"
      ORDER BY
        COUNT("profiles"."id") DESC;`
  );

  return profileCompetencies[0];
};

module.exports = countCompetencyProfiles;
