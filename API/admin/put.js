const getModel = require("./getModel.js").getModel;
const Models = require("../../models");
const User = Models.user;
const Profile = Models.profile;

const updateOption = async (request, response) => {
  try {
    const { id, type } = request.params;
    const model = getModel(type);

    dbObject = {
      id: id,
      ...request.body
    };
    if (type === "skill" || type === "competency") {
      dbObject.type = type;
    }

    await model
      .update(dbObject, { where: { id: id } })
      .then(updateInfo =>
        response
          .status(200)
          .json({ updatePerformed: updateInfo[0] === 1, error: null })
      );
  } catch (error) {
    response.status(500).json({ updatePerformed: null, error: error });
  }
};

const updateInactive = async (request, response) => {
  try {
    const { id } = request.params;

    User.update(
      { inactive: request.body.value },
      { where: { id: id } }
    ).then(updateInfo =>
      response
        .status(200)
        .json({ updatePerformed: updateInfo[0] === 1, error: null })
    );
  } catch (error) {
    response.status(500).json({ updatePerformed: false, error: error });
  }
};

const updateFlagged = async (request, response) => {
  try {
    const { id } = request.params;

    Profile.update(
      { flagged: request.body.value },
      { where: { id: id } }
    ).then(updateInfo =>
      response
        .status(200)
        .json({ updatePerformed: updateInfo[0] === 1, error: null })
    );
  } catch (error) {
    response.status(500).json({ updatePerformed: false, error: error });
  }
};

module.exports = { updateOption, updateFlagged, updateInactive };
