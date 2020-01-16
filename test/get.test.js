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
  it("Get User Info: ", async () => {
    const id = "012345";
    const req = mockRequest(id);
    const res = mockResponse();
    await get.getUserById(req, res).then(() => {
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json.mock.calls[0][0]).toHaveProperty("name", "Sukhu Sekhon");
      console.log("Name: ", res.json.mock.calls[0][0].name);
      expect(res.json.mock.calls[0][0]).toHaveProperty(
        "email",
        "john.doe@canada.ca"
      );
      console.log("Email: ", res.json.mock.calls[0][0].email);
      expect(res.json.mock.calls[0][0]).toHaveProperty("id", id);
      console.log("id: ", res.json.mock.calls[0][0].id);
      expect(res.json.mock.calls[0][0]).toHaveProperty("inactive", false);
      console.log("Inactive: ", res.json.mock.calls[0][0].inactive);
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
