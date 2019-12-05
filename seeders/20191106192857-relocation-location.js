"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    console.log("LFANJ up");
    const prom = queryInterface.bulkInsert("relocationLocations", [], {});
    console.log("finished up");
    return prom;
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    console.log("LFANJ down");
    return queryInterface.bulkDelete("relocationLocations", null, {});
  }
};
