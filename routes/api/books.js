// requires express from express
const router = require("express").Router();
// reuires our bookcontroller custom route/ sets our crud routes
const bookController = require("../../controllers/bookController");


router.route("/")
// grabs books from db then post to page
  .get(bookController.findAll)
// creates new book then posts it to our db
  .post(bookController.create);


router
// grabs id param of route and finds a book by id
  .route("/:id")
// find book by id
  .get(bookController.findById)
// updates a books id
  .put(bookController.update)
// removes a book id
  .delete(bookController.remove);

  // exports to be used elsewhere
module.exports = router;
