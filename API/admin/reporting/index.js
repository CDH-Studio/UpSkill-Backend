const get = require("./get");

const report = require("./test");

module.exports = { get, skillsReport: report.generateSkillsReport };
