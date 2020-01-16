// const post = require("../API/user/post");

// // Will use index.js from ../models/__mocks__
// jest.mock("../models");

// const mockRequest = (name, email) => {
//   const req = {};
//   req.body = { name: name, email: email };
//   return req;
// };

// const mockResponse = () => {
//   const res = {};
//   res.status = jest.fn().mockReturnValue(res);
//   res.json = jest.fn().mockReturnValue(res);
//   res.send = jest.fn().mockReturnValue(res);
//   return res;
// };

// // // Testing getUserById function (findOne):
// // describe("getUserInfoById", () => {
// //     it("Should get user info through id", async () => {
// //       const id = "b0d410be-30c1-11ea-89a8-d3732f9abb69";
// //       const req = mockRequest(id);
// //       const res = mockResponse();
// //       await get.getUserById(req, res).then(mockUserData => {
// //         expect(res.status).toHaveBeenCalledWith(200);
// //         expect(res.json.mock.calls[0][0][0]).toHaveProperty("name", "John Doe");
// //         expect(res.json.mock.calls[0][0][0]).toHaveProperty(
// //           "email",
// //           "john.doe@canada.ca"
// //         );
// //         expect(res.json.mock.calls[0][0][0]).toHaveProperty("id", id);
// //         expect(res.json.mock.calls[0][0][0]).toHaveProperty("inactive", false);
// //       });
// //     });
// // });

// // const createUser = async (request, response) => {
// //     User.findOrCreate({
// //       where: { email: request.body.email },
// //       defaults: { name: request.body.name }
// //     }).then(async ([user, created]) => {
// //       let hasProfile = !((await user.getProfile()) == null);
// //       let resData = { user, created, hasProfile };
// //       response.status(200).json(resData);
// //     });
// //   };

// describe("createUser", () => {
//   it("Should create user account", async () => {
//     const name = "mmm";
//     const email = "riz@canada.ca";
//     const req = mockRequest(name, email);
//     const res = mockResponse();
//     console.log("The req: ", req);
//     console.log("The res: ", res);
//     //console.log("Name: ", req.body.name);
//     await post.createUser(req, res).then(data => {
//       expect(res.status).toHaveBeenCalledWith(200);
//       console.log("This were I am:", res.json.mock.calls[0][0]);
//       expect(res.json.mock.calls[0][0]).toHaveProperty("hasProfile", true);
//     });
//   });
// });
