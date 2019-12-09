const { Router } = require("express");
const admin = require("./index");

const adminRouter = Router();

adminRouter.get("/options/:type", admin.getOption);
adminRouter.get("/flagged/:id", admin.getFlagged);
adminRouter.get("/inactive/:id", admin.getInactive);
adminRouter.get("/user", admin.getUser);
adminRouter.get("/dashboard", admin.dashboardCount);
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
