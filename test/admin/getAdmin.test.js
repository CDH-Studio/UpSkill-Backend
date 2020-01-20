const get = require("../../API/admin");

// Will use index.js from ../models/__mocks__
jest.mock("../../models");

// For getOption:
const mockRequest_v1 = data => {
  const req = {};
  req.params = data;
  return req;
};

const mockRequest_v2 = data => {
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

describe("getFlagged", () => {
  it("Get Flagged: ", async () => {
    const id = "06789";
    const req = mockRequest_v2(id);
    const res = mockResponse();
    await get.getFlagged(req, res).then(() => {
      expect(res.status).toHaveBeenCalledWith(200);
      console.log("Flagged: ", res.json.mock.calls[0][0]);
      expect(res.json.mock.calls[0][0]).toHaveProperty("value", true);
    });
  });
});

describe("getInactive", () => {
  it("get Inactive: ", async () => {
    const id = "012345";
    const req = mockRequest_v2(id);
    const res = mockResponse();
    await get.getInactive(req, res).then(() => {
      expect(res.status).toHaveBeenCalledWith(200);
      console.log("Inactive: ", res.json.mock.calls[0][0]);
      expect(res.json.mock.calls[0][0][0]).toHaveProperty("value", false);
    });
  });
});
