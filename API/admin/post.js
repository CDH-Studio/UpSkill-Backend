const getModel = require("./getModel.js").getModel;

const createOption = async (request, response) => {
  try {
    const { type, id } = request.params;

    dbObject = {
      id: id,
      ...request.body
    };

    const model = getModel(type);

    if (type === "skill" || type === "competency") {
      dbObject.type = type;
    }

    console.log("dbobj", dbObject);
    await model.create(dbObject, { returning: true });
    response.status(200).send("OK");
  } catch (error) {
    response.status(500).send(error.message);
  }
};

module.exports = { createOption };
