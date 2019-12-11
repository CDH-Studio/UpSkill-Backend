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
adminRouter.post("/options/:type", keycloak.protect(), admin.createOption);
adminRouter.post("/delete/:type", keycloak.protect(), admin.bulkDeleteOption);
adminRouter.put(
  "/profileStatus",
  keycloak.protect(),
  admin.updateProfileStatus
);
adminRouter
  .route("/options/:type/:id")
  .put(keycloak.protect(), admin.updateOption)
  .delete(keycloak.protect(), admin.deleteOption);
adminRouter.put("/flagged", keycloak.protect(), admin.updateFlagged);
adminRouter.put("/inactive", keycloak.protect(), admin.updateInactive);

module.exports = adminRouter;
