"use strict";
module.exports = (sequelize, DataTypes) => {
  const competency = sequelize.define(
    "competency",
    {
      descriptionEn: DataTypes.STRING,
      descriptionFr: DataTypes.STRING
    },
    {}
  );
  competency.associate = function(models) {
    competency.belongsToMany(models.profile, { through: "userCompetencies" });
  };
  return competency;
};
