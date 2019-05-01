// assignes path, and router to a variable to be called later
const path = require("path");
const router = require("express").Router();
// allows us to use our custom routes
const apiRoutes = require("./api");

//sets all of our routes to have /api in front of all routes
router.use("/api", apiRoutes);

// grabs server path when in the production env so it can still sue our custom paths
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

// exports router to be used else where ex. server.js
module.exports = router;
