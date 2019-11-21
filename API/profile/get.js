const moment = require("moment");
const Models = require("../../db/models");
const Profile = Models.profile;

const getProfile = async (request, response) => {
  response.status(200).json(await Profile.findAll());
};

const getProfileById = async (request, response) => {
  const id = request.params.id;
  let profile = await Profile.findOne({ where: { id: id } });
  let user = await profile.getUser();

  if (!profile) response.status(404).send("Profile Not Found");
  let data = { ...profile.dataValues, ...user.dataValues };

  let tenure = await profile.getTenure().then(res => {
    if (res) return res.dataValues;
  });

  let careerMobility = await profile.getCareerMobility().then(res => {
    if (res) return res.dataValues;
  });

  let talentMatrixResult = await profile.getTalentMatrixResult().then(res => {
    if (res) return res.dataValues;
  });

  let groupLevel = await profile.getGroupLevel().then(res => {
    if (res) return res.dataValues;
  });

  let securityClearance = await profile.getSecurityClearance().then(res => {
    if (res) return res.dataValues;
  });

  let acting = await profile.getActing().then(res => {
    if (res) return res.dataValues;
  });

  let location = await profile.getLocation().then(res => {
    if (res) return res.dataValues;
  });

  let experiences = await profile.getExperiences();
  let careerSummary = experiences.map(experience => {
    let startDate = moment(experience.startDate);
    let endDate = moment(experience.endDate);

    return {
      header: experience.organization,
      subheader: experience.jobTitle,
      content: experience.description,
      startDate: startDate,
      endDate: endDate
    };
  });

  let dbProjects = await profile.getProfileProjects();
  let projects = dbProjects.map(project => {
    return { text: project.description };
  });

  let education = await profile.getEducation();
  let educations = () => {
    return Promise.all(
      education.map(async educ => {
        let startDate = moment(educ.startDate);
        let endDate = moment(educ.endDate);
        let school = await educ.getSchool().then(res => {
          if (res) return res.dataValues;
        });
        let diploma = await educ.getDiploma().then(res => {
          if (res) return res.dataValues;
        });
        educ = educ.dataValues;

        return {
          school: {
            id: school.id,
            description: { en: school.description, fr: school.description }
          },
          diploma: {
            id: diploma.id,
            description: {
              en: diploma.descriptionEn,
              fr: diploma.descriptionFr
            }
          },
          content: "",
          startDate: { en: startDate, fr: startDate },
          endDate: { en: endDate, fr: endDate }
        };
      })
    );
  };

  let educArray = await educations();

  let branch;

  let organizationList = await profile
    .getProfileOrganizations({ order: [["tier", "DESC"]] })
    .then(organizations => {
      let branchOrg = organizations[Math.min(2, organizations.length - 1)];
      branch = {
        en: branchOrg.descriptionEn,
        fr: branchOrg.descriptionFr
      };

      let orgList = organizations.map(organization => {
        return {
          en: organization.descriptionEn,
          fr: organization.descriptionFr
        };
      });
      return orgList;
    });

  let skills = await profile.getSkills().map(skill => {
    if (skill)
      return {
        id: skill.dataValues.id,
        description: {
          en: skill.dataValues.descriptionEn,
          fr: skill.dataValues.descriptionFr
        }
      };
  });

  let competencies = await profile.getCompetencies().map(competencies => {
    if (competencies)
      return {
        id: competencies.dataValues.id,
        description: {
          en: competencies.dataValues.descriptionEn,
          fr: competencies.dataValues.descriptionFr
        }
      };
  });

  let developmentalGoals = await profile.getDevelopmentGoals().map(goal => {
    if (goal)
      return {
        id: goal.dataValues.id,
        description: {
          en: goal.dataValues.descriptionEn,
          fr: goal.dataValues.descriptionFr
        }
      };
  });

  let secLangProf = await profile.getSecondLanguageProficiency().then(res => {
    if (res) return res.dataValues;
  });

  //Response Object
  let resData = {
    acting: {
      id: acting ? acting.id : null,
      description: acting ? acting.description : null
    },
    actingPeriodStartDate: data.actingStartDate,
    actingPeriodEndDate: data.actingEndDate,
    branch,
    careerMobility: {
      id: careerMobility ? careerMobility.id : null,
      description: {
        en: careerMobility ? careerMobility.descriptionEn : null,
        fr: careerMobility ? careerMobility.descriptionFr : null
      }
    },
    careerSummary,
    competencies,
    developmentalGoals,
    education: educArray,
    email: data.email,
    exFeeder: data.exFeeder,
    firstLanguage:
      data.firstLanguage == "fr"
        ? { en: "French", fr: "Français" }
        : { en: "English", fr: "Anglais" },
    firstName: data.firstName,
    githubUrl: data.github,
    gradedOnSecondLanguage: true,
    classification: {
      id: groupLevel ? groupLevel.id : null,
      description: groupLevel ? groupLevel.description : null
    },
    jobTitle: { en: data.jobTitleEn, fr: data.jobTitleFr },
    lastName: data.lastName,
    linkedinUrl: data.linkedin,
    location: {
      id: location ? location.id : null,
      description: {
        en: location
          ? location.addressEn +
            ", " +
            location.city +
            ", " +
            location.provinceEn
          : null,
        fr: location
          ? location.addressFr +
            ", " +
            location.city +
            ", " +
            location.provinceFr
          : null
      }
    },
    manager: data.manager,
    cellphone: data.cellphone,
    organizationList,
    secondaryOralDate: secLangProf ? secLangProf.oralDate : null,
    secondaryOralProficiency: secLangProf ? secLangProf.oralProficiency : null,
    secondaryReadingDate: secLangProf ? secLangProf.readingDate : null,
    secondaryReadingProficiency: secLangProf
      ? secLangProf.readingProficiency
      : null,
    secondaryWritingDate: secLangProf ? secLangProf.writingDate : null,
    secondaryWritingProficiency: secLangProf
      ? secLangProf.writingProficiency
      : null,
    secondLanguage: null,
    security: {
      id: securityClearance ? securityClearance.id : null,
      description: {
        en: securityClearance ? securityClearance.descriptionEn : null,
        fr: securityClearance ? securityClearance.descriptionFr : null
      }
    },
    skills,
    tenure: {
      id: tenure ? tenure.id : null,
      description: {
        en: tenure ? tenure.descriptionEn : null,
        fr: tenure ? tenure.descriptionFr : null
      }
    },
    talentMatrixResult: {
      id: talentMatrixResult ? talentMatrixResult.id : null,
      description: {
        en: talentMatrixResult ? talentMatrixResult.descriptionEn : null,
        fr: talentMatrixResult ? talentMatrixResult.descriptionFr : null
      }
    },
    team: data.team,
    telephone: data.telephone,
    twitterUrl: data.twitter,
    yearsOfService: data.yearService,
    projects: projects
  };

  response.status(200).json(resData);
};

module.exports = {
  getProfile,
  getProfileById
};
