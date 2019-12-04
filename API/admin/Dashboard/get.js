const Models = require("../../../models");
const User = Models.user;
const Profile = Models.profile;

const allCount = async (request, response) => {
  try {
    const flagged = await Profile.count({
      where: { flagged: true }
    });

    const inactive = await User.count({
      where: { inactive: true }
    });

    const user = await User.count();

    const exFeeder = await Profile.count({
      where: { exFeeder: true }
    });

    response.status(200).json({ user, exFeeder, flagged, inactive });
  } catch (error) {
    response.status(500).json(error);
  }
};

module.exports = allCount;
