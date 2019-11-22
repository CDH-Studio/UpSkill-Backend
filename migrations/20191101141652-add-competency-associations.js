"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("profileCompetencies", {
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        profileId: {
          type: Sequelize.UUID,
          primaryKey: true,
          references: {
            model: "profiles", // name of Target model
            key: "id" // key in Target model that we're referencing
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE"
        },
        competencyId: {
          type: Sequelize.UUID,
          primaryKey: true,
          references: {
            model: "competencies", // name of Target model
            key: "id" // key in Target model that we're referencing
          }
        }
      })
      .then(() => {
        return queryInterface.createTable("profileDevelopmentGoals", {
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          profileId: {
            type: Sequelize.UUID,
            primaryKey: true,
            references: {
              model: "profiles", // name of Target model
              key: "id" // key in Target model that we're referencing
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE"
          },
          competencyId: {
            type: Sequelize.UUID,
            primaryKey: true,
            references: {
              model: "competencies", // name of Target model
              key: "id" // key in Target model that we're referencing
            }
          }
        });
      });
  },

  down: (queryInterface, Sequelize) => {
    // remove table
    return queryInterface.dropTable("profileCompetencies").then(() => {
      return queryInterface.dropTable("profileDevelopmentGoals");
    });
  }
};
