const getModel = require("./getModel.js").getModel;

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

module.exports = { getOption };
