const Models = require("../../../../models");

// const Migration = ?;

const Skills = Models.skill; // skills table

// const ProfileCompetencies = ?; // profileCompetencies table

const countCompetenciesProfiles = async () => {
  const occurences = {}; // {descriptionEn, descriptionFr, profileCount}

  const getRows = await Skills.findAll({
    where: {
      type: "competency"
    }
  });

  // console.log("Output: ", getRows);

  getRows.forEach(row => {
    const descriptionEn = row.descriptionEn;

    // console.log("Competency: ", descriptionEn);

    const descriptionFr = row.descriptionFr;

    const id = row.id;

    // console.log("Competency ID: ", id);

    const amount = ProfileSkills.count({ where: { skillId: id } });

    occurences.push({ descriptionEn, descriptionFr, amount });
  });

  // console.log("Occurences: ", occurences);

  return occurences;
};

module.exports = countCompetenciesProfiles;
