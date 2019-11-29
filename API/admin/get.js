const getModel = require("./getModel.js").getModel;
const Models = require("../../models");
const User = Models.user;
const Profile = Models.profile;

const getOption = async (request, response) => {
  try {
    const { id, type } = request.params;
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
    console.log("flagged");
    const { id } = request.params;
    Profile.findOne({ where: { id: id } }).then(row =>
      response.status(200).json({ value: row.flagged })
    );
    //console.log("rpw", row.toJson());
  } catch (error) {
    response.status(500).json(error);
  }
};

const getInactive = async (request, response) => {
  try {
    const { id } = request.params;
    User.findOne({ where: { id: id } }).then(row =>
      response.status(200).json({ value: row.inactive })
    );
  } catch (error) {
    response.status(500).json(error);
  }
};

module.exports = { getOption, getFlagged, getInactive };
