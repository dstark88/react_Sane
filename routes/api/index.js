const router = require("express").Router();
const postRoutes = require("./posts");
const siteRoutes = require("./sites");
// user routes
router.use("/posts", postRoutes);
router.use("/sites", siteRoutes);
module.exports = router;