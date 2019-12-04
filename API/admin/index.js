const put = require("./put");
const post = require("./post");
const del = require("./delete");
const get = require("./get");
const allCount = require("./Dashboard/get");

module.exports = {
  createOption: post.createOption,
  deleteOption: del.deleteOption,
  updateOption: put.updateOption,
  getOption: get.getOption,
  updateFlagged: put.updateFlagged,
  updateInactive: put.updateInactive,
  getFlagged: get.getFlagged,
  getInactive: get.getInactive,
  getUser: get.getUser,
  allCount
};
