const Models = require("../../../models");
const Profile = Models.profile;

const locationSearch = async (profiles, locationArray) => {
  let locationProf = [];

  profiles.forEach(profile => {
    if (!profile.location) return;
    const locationId = profile.location.id;
    console.log(locationId, locationArray, locationArray.includes(locationId));

    if (locationArray.includes(locationId)) locationProf.push(profile);
  });
  return locationProf;
};

module.exports = locationSearch;
