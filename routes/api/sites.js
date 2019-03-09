const router = require("express").Router();
const sitesController = require("../../controllers/sitesController");

// Matches with "/api/sites"
router.route("/")
  .get(sitesController.findAll)
  .post(sitesController.findSearch);

// Matches with "/api/sites/:id"
router
  .route("/:id")
  .get(sitesController.findById)
  .put(sitesController.update)
  .delete(sitesController.remove);

module.exports = router;