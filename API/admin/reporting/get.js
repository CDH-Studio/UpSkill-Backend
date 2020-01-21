const getModel = require("../getModel.js").getModel;
const models = require("../../../models");
const User = Models.user; // user.js
const Profile = Models.profile; // profile.js
const ProfileSkills = Models.profileSkills; // profileSkills.js

const countSkill = async (request, response) => {
  try {
    const { id } = request.params; // skill ID

    Profile;
  } catch (error) {
    response.status(500).json(error);
  }
};
