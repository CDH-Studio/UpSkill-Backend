// "use strict";

// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     /*
//       Add altering commands here.
//       Return a promise to correctly handle asynchronicity.
//     */
//     return queryInterface.bulkInsert(
//       "profileSkills",
//       [
//         {
//           createdAt: new Date(),
//           updatedAt: new Date(),
//           profileId: "faba08aa-ffe3-11e9-8d71-362b9e155667",
//           skillId: "ef60f9fe-016f-11ea-9a9f-362b9e155667"
//         },
//         {
//           createdAt: new Date(),
//           updatedAt: new Date(),
//           profileId: "faba08aa-ffe3-11e9-8d71-362b9e155667",
//           skillId: "f6f51402-016f-11ea-9a9f-362b9e155667"
//         }
//       ],
//       {}
//     );
//   },

//   down: (queryInterface, Sequelize) => {
//     /*
//       Add reverting commands here.
//       Return a promise to correctly handle asynchronicity.
//     */
//     return queryInterface.bulkDelete("profileSkills", null, {});
//   }
// };
"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
