const ExcelJS = require("exceljs");
const utils = require("./util");

const skillsReport = async () => {
  const adminWorkbook = new ExcelJS.Workbook();

  console.log("Workbook Created!");

  const commonSkills = adminWorkbook.addWorksheet("Common Skills");

  console.log("Sheet Created!");

  commonSkills.columns = [
    { header: "Skill Name:", key: "skillName", width: 50 },
    { header: "# of Occurences:", key: "count", width: 50 }
  ];

  commonSkills.getCell("A1").alignment = {
    vertical: "middle",
    horizontal: "center"
  };

  commonSkills.getCell("B1").alignment = {
    vertical: "middle",
    horizontal: "center"
  };

  const skillProfiles = await utils.countSkillProfiles().then(res => res);

  skillProfiles.forEach(skill => {
    commonSkills.addRow({
      skillName: skill.descriptionEn,
      count: skill.countOccurences
    });
  });

  await adminWorkbook.xlsx.writeFile("export.xlsx");
};

module.exports = skillsReport;
