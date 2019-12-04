const getModel = require("./getModel.js").getModel;
const Models = require("../../models");
const User = Models.user;
const Profile = Models.profile;

const getAllFlaggedProfiles = async (request, response) => {
  try {
    // const { id } = request.params;

    Profile.count({
      where: { flagged: true }
    }).then(numFlaggedProfiles =>
      response.status(200).json({ value: numFlaggedProfiles })
    );
  } catch (error) {
    response.status(500).json(error);
  }
};

const getAllFlaggedProfiles = async (request, response) => {
  try {
    // const { id } = request.params;

    Profile.count().then(numFlaggedProfiles =>
      response.status(200).json({ value: numFlaggedProfiles })
    );
  } catch (error) {
    response.status(500).json(error);
  }
};

getAllInactiveUsers;
getAllUsers;
getAllExFeeders;

module.exports = { getAllFlaggedProfiles };
