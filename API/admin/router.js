const { Router } = require("express");
const admin = require("./index");

// const { keycloak } = require("../../util/keycloak");

// const catchAdminCheck = token => {
//   let hasRole = false;
//   try {
//     hasRole = token.hasRole("view-admin-console");
//   } catch (error) {
//     return false;
//   } finally {
//     return hasRole;
//   }
// };

// const adminRouter = Router();
// adminRouter.get(
//   "/options/:type",
//   keycloak.protect("view-admin-console"),
//   admin.getOption
// );
// adminRouter.get(
//   "/flagged/:id",
//   keycloak.protect("view-admin-console"),
//   admin.getFlagged
// );
// adminRouter.get(
//   "/inactive/:id",
//   keycloak.protect("view-admin-console"),
//   admin.getInactive
// );
// adminRouter.get("/user", keycloak.protect("view-admin-console"), admin.getUser);
// adminRouter.get(
//   "/dashboard",
//   keycloak.protect("view-admin-console"),
//   admin.dashboardCount
// );
// adminRouter.get("/check", keycloak.protect(catchAdminCheck), admin.checkAdmin);
// adminRouter.post(
//   "/options/:type",
//   keycloak.protect("manage-options"),
//   admin.createOption
// );
// adminRouter.post(
//   "/delete/:type",
//   keycloak.protect("manage-options"),
//   admin.bulkDeleteOption
// );
// adminRouter.put(
//   "/profileStatus",
//   keycloak.protect(),
//   admin.updateProfileStatus
// );
// adminRouter
//   .route("/options/:type/:id")
//   .put(keycloak.protect("manage-options"), admin.updateOption)
//   .delete(keycloak.protect("manage-options"), admin.deleteOption);
// adminRouter.put(
//   "/flagged",
//   keycloak.protect("manage-users"),
//   admin.updateFlagged
// );
// adminRouter.put(
//   "/inactive",
//   keycloak.protect("manage-users"),
//   admin.updateInactive
// );

const adminRouter = Router();
adminRouter.get("/options/:type", admin.getOption);
adminRouter.get("/flagged/:id", admin.getFlagged);
adminRouter.get("/inactive/:id", admin.getInactive);
adminRouter.get("/user", admin.getUser);
adminRouter.get("/dashboard", admin.dashboardCount);
adminRouter.get("/check", admin.checkAdmin);
adminRouter.post("/options/:type", admin.createOption);
adminRouter.post("/delete/:type", admin.bulkDeleteOption);
adminRouter.put("/profileStatus", admin.updateProfileStatus);
adminRouter
  .route("/options/:type/:id")
  .put(admin.updateOption)
  .delete(admin.deleteOption);
adminRouter.put("/flagged", admin.updateFlagged);
adminRouter.put("/inactive", admin.updateInactive);

module.exports = adminRouter;

module.exports = adminRouter;
