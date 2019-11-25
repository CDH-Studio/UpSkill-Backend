"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      "profileDevelopmentGoals",
      [
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          profileId: "faba08aa-ffe3-11e9-8d71-362b9e155667",
          skillId: "3a57095f-0174-11ea-8d71-362b9e155667"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkDelete("profileDevelopmentGoals", null, {});
  }
};
