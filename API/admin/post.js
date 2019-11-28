const getModel = require("./getModel.js").getModel;

const createOption = async (request, response) => {
  try {
    const { type, id } = request.params;
    const model = getModel(type);

    dbObject = {
      id: id,
      ...request.body
    };
    if (type === "skill" || type === "competency") {
      dbObject.type = type;
    }

    await model.create(dbObject, { returning: true });
    response.status(200).send("OK");
  } catch (error) {
    response.status(500).send(error.message);
  }
};

module.exports = { createOption };
