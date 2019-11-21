"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("users", {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal("uuid_generate_v1()")
        },
        name: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      })
      .then(() => {
        return queryInterface.createTable("profiles", {
          id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            references: {
              model: "users", // name of Target model
              key: "id" // key in Target model that we're referencing
            },
            defaultValue: Sequelize.literal("uuid_generate_v1()")
          },
          firstName: {
            type: Sequelize.STRING
          },
          lastName: {
            type: Sequelize.STRING
          },
          jobTitleEn: {
            type: Sequelize.STRING
          },
          jobTitleFr: {
            type: Sequelize.STRING
          },
          telephone: {
            type: Sequelize.STRING
          },
          cellphone: {
            type: Sequelize.STRING
          },
          manager: {
            type: Sequelize.STRING
          },
          team: {
            type: Sequelize.STRING
          },
          firstLanguage: {
            type: Sequelize.STRING
          },
          secondLanguage: {
            type: Sequelize.STRING
          },
          yearService: {
            type: Sequelize.INTEGER
          },
          actingStartDate: {
            type: Sequelize.DATE
          },
          actingEndDate: {
            type: Sequelize.DATE
          },
          linkedin: {
            type: Sequelize.STRING
          },
          github: {
            type: Sequelize.STRING
          },
          twitter: {
            type: Sequelize.STRING
          },
          exFeeder: {
            type: Sequelize.BOOLEAN
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          }
        });
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("profiles").then(() => {
      return queryInterface.dropTable("users");
    });
  }
};
