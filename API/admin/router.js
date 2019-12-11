const { Router } = require("express");
const admin = require("./index");

const { keycloak } = require("../../keycloak/keycloak");

const adminRouter = Router();
adminRouter.get(
  "/options/:type",
  keycloak.protect("view-admin-console"),
  admin.getOption
);
adminRouter.get(
  "/flagged/:id",
  keycloak.protect("view-admin-console"),
  admin.getFlagged
);
adminRouter.get(
  "/inactive/:id",
  keycloak.protect("view-admin-console"),
  admin.getInactive
);
adminRouter.get("/user", keycloak.protect("view-admin-console"), admin.getUser);
adminRouter.get(
  "/dashboard",
  keycloak.protect("view-admin-console"),
  admin.dashboardCount
);
adminRouter.post(
  "/options/:type",
  keycloak.protect("manage-options"),
  admin.createOption
);
adminRouter.post(
  "/delete/:type",
  keycloak.protect("manage-options"),
  admin.bulkDeleteOption
);
adminRouter.put(
  "/profileStatus",
  keycloak.protect(),
  admin.updateProfileStatus
);
adminRouter
  .route("/options/:type/:id")
  .put(keycloak.protect("manage-options"), admin.updateOption)
  .delete(keycloak.protect("manage-options"), admin.deleteOption);
adminRouter.put(
  "/flagged",
  keycloak.protect("manage-users"),
  admin.updateFlagged
);
adminRouter.put(
  "/inactive",
  keycloak.protect("manage-users"),
  admin.updateInactive
);

module.exports = adminRouter;
