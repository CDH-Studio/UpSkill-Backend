"use strict";
module.exports = (sequelize, DataTypes) => {
  const profile = sequelize.define(
    "profile",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      jobTitleEn: DataTypes.STRING,
      jobTitleFr: DataTypes.STRING,
      telephone: DataTypes.STRING,
      cellphone: DataTypes.STRING,
      manager: DataTypes.STRING,
      team: DataTypes.STRING,
      firstLanguage: DataTypes.STRING,
      secondLanguage: DataTypes.STRING,
      yearService: DataTypes.INTEGER,
      actingStartDate: DataTypes.DATE,
      actingEndDate: DataTypes.DATE,
      linkedin: DataTypes.STRING,
      github: DataTypes.STRING,
      twitter: DataTypes.STRING,
      exFeeder: DataTypes.BOOLEAN
    },
    {}
  );
  profile.associate = function(models) {
    profile.belongsTo(models.user, {
      foreignKey: { fieldName: "id" }
    });
    profile.belongsToMany(models.skill, {
      through: "profileSkills"
    });
    profile.belongsToMany(models.competency, {
      through: "profileCompetencies"
    });
    profile.belongsToMany(models.competency, {
      through: "profileDevelopmentGoals",
      as: "developmentGoals"
    });
    profile.belongsTo(models.tenure);
    profile.belongsTo(models.groupLevel);
    profile.belongsTo(models.groupLevel, {
      foreignKey: { fieldName: "actingId" },
      as: "acting"
    });
    profile.belongsTo(models.securityClearance);
    profile.belongsTo(models.location);
    profile.belongsTo(models.careerMobility);
    profile.belongsTo(models.talentMatrixResult);
    profile.belongsTo(models.keyCompetency);
    profile.belongsTo(models.secondLanguageProficiency, {
      onDelete: "CASCADE"
    });
    profile.hasMany(models.experience);
    profile.hasMany(models.education);
    profile.hasMany(models.profileOrganization, {
      onDelete: "CASCADE"
    });
    profile.hasMany(models.profileProject);
  };
  return profile;
};
