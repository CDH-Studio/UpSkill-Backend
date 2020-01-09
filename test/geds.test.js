const geds = require("../API/geds");

const mockRequest = data => {
  return { ...data };
};

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe("getEmployeeInfo", () => {
  test("Expect results from geds", async () => {
    const req = mockRequest({ params: { searchValue: "rizvi" } });
    const res = mockResponse();
    await geds.getEmployeeInfo(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalled();
  });

  test("jest.fn recalls what it has been called with", () => {
    const mock = jest.fn();
    mock("a", "b", "c");
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith("a", "b", "c");
  });
});
