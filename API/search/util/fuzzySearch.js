const moment = require("moment");
const Fuse = require("fuse.js");

const Models = require("../../../models");
const Profile = Models.profile;

const fuzzySearch = async searchValue => {
  const profiles = await Profile.findAll({
    attributes: [
      "id",
      "firstName",
      "lastName",
      "jobTitleEn",
      "jobTitleFr",
      "telephone",
      "cellphone",
      "manager",
      "team",
      "groupLevelId",
      "locationId",
      "actingId"
    ]
  });
  const allProf = await getProfs(profiles, searchValue).then(profs => profs);

  const options = {
    shouldSort: true,
    keys: [
      "acting.description",
      "branch.en",
      "branch.fr",
      "careerSummary.header",
      "careerSummary.subheader",
      "careerSummary.content",
      "competencies.en",
      "competencies.fr",
      "education.school.description.en",
      "education.school.description.fr",
      "education.diploma.description.en",
      "education.diploma.description.fr",
      "email",
      "firstName",
      "jobTitle.en",
      "jobTitle.fr",
      "lastName",
      "location.description.en",
      "location.description.fr",
      "manager",
      "cellphone",
      "organizationList.en",
      "organizationList.fr",
      "skills.description.en",
      "skills.description.fr",
      "team",
      "telephone",
      "projects.text"
    ]
  };

  const fuse = new Fuse(allProf, options);

  const results = fuse.search(searchValue);

  return results;
};

getProfs = (profiles, searchValue) => {
  return Promise.all(
    profiles.map(profile => {
      return getProf(profile, searchValue);
    })
  );
};

getProf = async (profile, searchValue) => {
  let user = await profile.getUser({ attributes: ["email"] });

  if (!profile) response.status(404).send("Profile Not Found");

  let profileData = profile ? profile.dataValues : {};
  let userData = user ? user.dataValues : {};

  let data = { ...profileData, ...userData };

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

  let allSkill = skills.concat(competencies);

  allSkill = allSkill.map(skill => skill.description);

  const options = {
    shouldSort: true,
    keys: ["en", "fr"],
    limit: 8
  };

  const fuse = new Fuse(allSkill, options);

  const resultSkills = fuse.search(searchValue).slice(0, 8);

  //Response Object
  let resData = {
    id: data.id,
    acting: {
      id: acting ? acting.id : null,
      description: acting ? acting.description : null
    },
    branch,
    careerSummary,
    competencies,
    education: educArray,
    email: data.email,
    firstName: data.firstName,
    jobTitle: { en: data.jobTitleEn, fr: data.jobTitleFr },
    lastName: data.lastName,
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
    skills,
    team: data.team,
    telephone: data.telephone,
    projects: projects,
    resultSkills
  };
  return resData;
};

module.exports = { fuzzySearch };
