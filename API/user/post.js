const Models = require("../../models");
const User = Models.user;

const createUser = async (request, response) => {
  // console.log("I am running createUser()");
  await User.findOrCreate({
    where: { email: request.body.email },
    defaults: { name: request.body.name }
  }).then(async ([user, created]) => {
    let hasProfile = !((await user.getProfile()) == null);
    console.log("THIS SHOULD BE NULL: ", await user.getProfile(), "The end");
    let resData = { user, created, hasProfile };
    response.status(200).json(resData);
  });
};

module.exports = {
  createUser
};
