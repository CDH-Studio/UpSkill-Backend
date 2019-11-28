const put = require("./put");
const post = require("./post");
const del = require("./delete");
const get = require("./get");

module.exports = {
  createOption: post.createOption,
  deleteOption: del.deleteOption,
  updateOption: put.updateOption,
  getOption: get.getOption
};
