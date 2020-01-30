const report = require("./skillsReport");

const generateSkillsReport = async (request, response) => {
  let skillsReport = await report.skillsReport().then(res => res);
  response.status(200).json({
    skillsReport
  });
};

module.exports = { generateSkillsReport };
