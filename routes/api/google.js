//requires router from express
const router = require("express").Router();
// requires our custom controller route that hits googles api to get data
const googleController = require("../../controllers/googleController");

// routes to our home and does a find all query
router
  .route("/")
  .get(googleController.findAll);

  // exports to be used elsewhere
module.exports = router;
