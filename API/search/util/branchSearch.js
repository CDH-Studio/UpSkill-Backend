const Fuse = require("fuse.js");

const branchSearch = async (profiles, branchArray) => {
  let locationProf = [];
  profiles.forEach(profile => {
    if (!profile.branch) return;
    const branchId = profile.branch.id;

    if (branchArray.includes(branchId)) branchProf.push(profile);
  });
  return branchProf;
};

module.exports = branchSearch;
