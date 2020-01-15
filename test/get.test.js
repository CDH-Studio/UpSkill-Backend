const get = require("../API/user/get");
const Models = require("../models");

//Will user index.js from ../models/__mocks__
jest.mock("../models");

const mockRequest = data => {
  const req = {};
  req.params = { id: data };
  return req;
};

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

describe("getUserInfo", () => {
  it("Should get user info", async () => {
    const id = "247ed9ea-30c2-11ea-aee3-af83807df973";
    const req = mockRequest(id);
    const res = mockResponse();
    await get.getUserById(req, res).then(data => {
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json.mock.calls[0][0]).toHaveProperty(
        "name",
        "Sukhsimranpreet Singh Sekhon"
      );
      expect(res.json.mock.calls[0][0]).toHaveProperty(
        "email",
        "sukhsimranpreetsingh.sekhon@canada.ca"
      );
      expect(res.json.mock.calls[0][0]).toHaveProperty("id", id);
    });
  });
});

const mockUserData = {
  data: [
    {
      id: "247ed9ea-30c2-11ea-aee3-af83807df973",
      name: "Sukhsimranpreet Singh Sekhon",
      email: "sukhsimranpreetsingh.sekhon@canada.ca",
      inactive: false
    }
  ]
};
