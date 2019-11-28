const getModel = require("./getModel.js").getModel;

const updateOption = async (request, response) => {
  try {
    console.log("GOT POST", request.params, request.body);
    const { id, type } = request.params;

    dbObject = {
      id: id,
      ...request.body
    };

    const model = getModel(type);

    if (type === "skill" || type === "competency") {
      dbObject.type = type;
    }

    console.log("dbobj", dbObject);
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

module.exports = { updateOption };
