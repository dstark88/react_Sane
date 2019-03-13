const router = require("express").Router();
const postRoutes = require("./posts");
const siteRoutes = require("./sites");
const userRoutes = require("./user");
// user routes
router.use("/posts", postRoutes);
router.use("/sites", siteRoutes);
router.use("./user", userRoutes);
module.exports = router;