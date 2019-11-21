const Models = require("../../db/models");
const User = Models.user;

const createUser = async (request, response) => {
  User.findOrCreate({
    where: { email: request.body.email },
    defaults: { name: request.body.name }
  }).then(async ([user, created]) => {
    let hasProfile = !((await user.getProfile()) == null);
    let resData = { user, created, hasProfile };
    response.status(200).json(resData);
  });
};

module.exports = {
  createUser
};
