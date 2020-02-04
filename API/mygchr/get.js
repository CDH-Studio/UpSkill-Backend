const axios = require("axios");

const Models = require("../../models");
const User = Models.user;

// const getUser = async (request, response) => {
//   response.status(200).json(await User.findAll());
// };

const getUserInfoByPRI = async (request, response) => {
  //   const id = request.params.id;
  const pri = request.params.pri;
  //   response.status(200).json(await User.findOne({ where: { id: id } }));
};

module.exports = {
  getUserInfoByPRI
};
