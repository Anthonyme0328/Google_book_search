// requires path as a variable
const path = require("path");
// requires express and grabs all of the api dir and lets us use it elsewhere
const router = require("express").Router();
// requires our custom routes in the api dir
const bookRoutes = require("./books");
const googleRoutes = require("./google");

// bring in then exports our api routes in one files
router.use("/books", bookRoutes);

router.use("/google", googleRoutes);
// the instance in which we export all of the router. instances
module.exports = router;
