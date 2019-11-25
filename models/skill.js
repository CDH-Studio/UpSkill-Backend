"use strict";
module.exports = (sequelize, DataTypes) => {
  const skill = sequelize.define(
    "skill",
    {
      descriptionEn: DataTypes.STRING,
      descriptionFr: DataTypes.STRING,
      type: DataTypes.STRING
    },
    {}
  );
  skill.associate = function(models) {
    skill.belongsToMany(models.profile, { through: "profileSkills" });
  };
  return skill;
};
