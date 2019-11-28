const Models = require("../../../models");
const Profile = Models.profile;
const Fuse = require("fuse.js");

const nameSearch = async (profiles, searchValue) => {
  const options = {
    shouldSort: true,
    keys: ["firstName", "lastName"]
  };

  const fuse = new Fuse(profiles, options);

  let results = fuse.search(searchValue);
  return results;
};

module.exports = nameSearch;
