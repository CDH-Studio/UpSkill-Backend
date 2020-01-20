const getModel = require("./getModel.js").getModel;
const Models = require("../../models");
const User = Models.user;
const Profile = Models.profile;
const Tenure = Models.tenure;

const getOption = async (request, response) => {
  try {
    const { type } = request.params;
    const model = getModel(type);

    let options = {
      attributes: { exclude: ["createdAt", "updatedAt"] }
    };
    if (type === "skill" || type === "competency") {
      options.where = { type: type };
    }

    const rows = await model.findAll(options);
    response.status(200).json(rows);
  } catch (error) {
    response.status(500).json(error);
  }
};

const getFlagged = async (request, response) => {
  try {
    console.log("Entered with ID: ", request.params);

    const { id } = request.params;

    await Profile.findOne({ where: { id: id } }).then(row =>
      response.status(200).json({ value: row.flagged })
    );
  } catch (error) {
    response.status(500).json(error);
  }
};

const getInactive = async (request, response) => {
  try {
    console.log("Entered with ID: ", request.params);

    const { id } = request.params;

    await User.findOne({ where: { id: id } }).then(row =>
      response.status(200).json({ value: row.inactive })
    );

    const print = await User.findOne({ where: { id: id } });

    console.log(
      "The End: ",
      print.then(row => response.status(200).json({ value: row.inactive }))
    );
  } catch (error) {
    response.status(500).json(error);
  }
};

const getUser = async (request, response) => {
  const values = await Profile.findAll({
    include: [User, Tenure],
    attributes: [
      "id",
      "firstName",
      "lastName",
      //"branchEn",
      //"branchFr",
      "flagged",
      "createdAt",
      "jobTitleEn",
      "jobTitleFr"
    ]
  });

  response.status(200).json(values);
};

const dashboardCount = async (request, response) => {
  try {
    const flagged = await Profile.count({
      where: { flagged: true }
    });

    const inactive = await User.count({
      where: { inactive: true }
    });

    const user = await Profile.count();

    const exFeeder = await Profile.count({
      where: { exFeeder: true }
    });

    response.status(200).json({ user, exFeeder, flagged, inactive });
  } catch (error) {
    response.status(500).json(error);
  }
};

const checkAdmin = (request, response) =>
  response.status(200).send("Access Granted");

module.exports = {
  getOption,
  getFlagged,
  getInactive,
  getUser,
  dashboardCount,
  checkAdmin
};
