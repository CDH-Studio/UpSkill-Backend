const geds = require("../API/geds");

test("Expect results from geds", () => {
  expect(geds.getEmployeeInfo()).toBe(3);
});
