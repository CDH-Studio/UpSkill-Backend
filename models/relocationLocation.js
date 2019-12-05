"use strict";
module.exports = (sequelize, DataTypes) => {
  const lookingForANewJob = sequelize.define("relocationLocation", {}, {});
  lookingForANewJob.associate = function(models) {
    lookingForANewJob.hasMany(models.profile);
    lookingForANewJob.hasMany(models.location);
  };
  return lookingForANewJob;
};
