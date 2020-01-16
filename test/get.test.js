const get = require("../API/user/get");

// Will use index.js from ../models/__mocks__
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

// Testing getUserById function (findOne):
describe("getUserInfoById", () => {
  it("Should get user info through id", async () => {
    const id = "b0d410be-30c1-11ea-89a8-d3732f9abb69";
    const req = mockRequest(id);
    const res = mockResponse();
    await get.getUserById(req, res).then(mockUserData => {
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json.mock.calls[0][0][0]).toHaveProperty("name", "John Doe");
      expect(res.json.mock.calls[0][0][0]).toHaveProperty(
        "email",
        "john.doe@canada.ca"
      );
      expect(res.json.mock.calls[0][0][0]).toHaveProperty("id", id);
      expect(res.json.mock.calls[0][0][0]).toHaveProperty("inactive", false);
    });
  });
});

// Testing getUser function (findAll):
describe("getAllUserInfo", () => {
  it("Should get all user info", async () => {
    const req = null;
    const res = mockResponse();
    await get.getUser(req, res).then(mockUserData => {
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json.mock.calls[0][0][0][2]).toHaveProperty(
        "name",
        "Sir Bobby Hall"
      );
      expect(res.json.mock.calls[0][0][0][0]).toHaveProperty(
        "email",
        "john.doe@canada.ca"
      );
      expect(res.json.mock.calls[0][0][0][1]).toHaveProperty(
        "id",
        "faba08aa-ffe3-11e9-8d71-362b9e155667"
      );
      expect(res.json.mock.calls[0][0][0][2]).toHaveProperty("inactive", true);
    });
  });
});
