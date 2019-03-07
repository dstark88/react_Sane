const router = require("express").Router();
const userRoutes = require("./users");
const siteRoutes = require("./sites");
// user routes
router.use("/users", userRoutes);
router.use("/sites", siteRoutes);
module.exports = router;