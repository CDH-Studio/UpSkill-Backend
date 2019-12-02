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

const locationSearch = async (profiles, locationArray) => {
  let locationProf = [];

  profiles.forEach(profile => {
    if (!profile.location) return;
    const locationId = profile.location.id;

    if (locationArray.includes(locationId)) locationProf.push(profile);
  });
  return locationProf;
};

module.exports = locationSearch;
