const Models = require("../../../db/models");
const Profile = Models.profile;
const sequelize = require("sequelize");
const Op = sequelize.Op;

const getProfileByName = async (request, response) => {
  let { searchValue } = request.params;
  //Make lowercase
  searchValue = searchValue.toLowerCase();

  const results = await Profile.findAll({
    where: sequelize.where(
      sequelize.fn(
        "concat",
        sequelize.fn("lower", sequelize.col("firstName")),
        " ",
        sequelize.fn("lower", sequelize.col("lastName"))
      ),
      {
        [Op.like]: "%" + searchValue + "%"
      }
    )
    // where: { firstName: { [Op.like]: "%" + searchValue + "%" } }
  });

  response.status(200).json(results);
};

module.exports = {
  getProfileByName
};
