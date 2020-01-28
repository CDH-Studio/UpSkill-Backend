const moment = require("moment");
const Sequelize = require("sequelize");
const Models = require("../../../../models");
const Profiles = Models.profile; // Profiles Table

const growthRateByMonth = async () => {
  let countNewUsers = [];

  const profiles = await Profiles.findAll({
    attributes: ["id", "createdAt"]
  });

  const currentDate = moment();

  // console.log("Date: ", currentDate); // Check if initialized

  profiles.forEach(profile => {
    const profileTime = moment(profile.createdAt);
    // console.log("Date: ", profileTime);
    const difference = currentDate.diff(profileTime, "months");
    // console.log("Difference: ", duration);
    // console.log(countNewUsers[difference]);

    countNewUsers[difference] = countNewUsers[difference]
      ? countNewUsers[difference] + 1
      : 1;
  });

  countNewUsers = Array.from(countNewUsers, item => item || 0);

  // console.log("Array (Months): ", countNewUsers);

  return countNewUsers;
};

module.exports = growthRateByMonth;
