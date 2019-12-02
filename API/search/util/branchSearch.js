const Fuse = require("fuse.js");

const branchSearch = async (profiles, searchValue) => {
  const options = {
    shouldSort: true,
    threshold: 0.4,
    keys: ["branch.en", "branch.fr"]
  };

  const fuse = new Fuse(profiles, options);

  let results = fuse.search(searchValue);
  return results;
};

module.exports = branchSearch;
