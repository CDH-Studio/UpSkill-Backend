const getModel = require("./getModel.js").getModel;
const Models = require("../../models");
const User = Models.user;
const Profile = Models.profile;

const getAllFlaggedProfiles = async (request, response) => {
  try {
    // const { id } = request.params;

    Profile.count({
      where: { flagged: true }
    }).then(numOfFlaggedProfiles =>
      response.status(200).json({ value: numOfFlaggedProfiles })
    );
  } catch (error) {
    response.status(500).json(error);
  }
};

const getAllInactiveUsers = async (request, response) => {
  try {
    // const { id } = request.params;

    Profile.count().then(numFlaggedProfiles =>
      response.status(200).json({ value: numFlaggedProfiles })
    );
  } catch (error) {
    response.status(500).json(error);
  }
};

const getAllUsers = async (request, response) => {
  try {
    // const { id } = request.params;

    Profile.count().then(numFlaggedProfiles =>
      response.status(200).json({ value: numFlaggedProfiles })
    );
  } catch (error) {
    response.status(500).json(error);
  }
};

const getAllExFeeders = async (request, response) => {
  try {
    // const { id } = request.params;

    Profile.count().then(numFlaggedProfiles =>
      response.status(200).json({ value: numFlaggedProfiles })
    );
  } catch (error) {
    response.status(500).json(error);
  }
};

module.exports = {
  getAllFlaggedProfiles,
  getAllInactiveUsers,
  getAllUsers,
  getAllExFeeders
};
