const get = require("./get");
const post = require("./post");
const put = require("./put");

module.exports = {
  getProfile: get.getProfile,
  getProfileById: get.getProfileById,
  createProfile: post.createProfile,
  updateProfile: put.updateProfile
};
