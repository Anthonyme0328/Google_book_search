// requires axios to be used/ hits apis
const axios = require("axios");
// requires our modles fold custom route for db useage
const db = require("../models");



module.exports = {
  // defines our findall method to hit google api
  findAll: function(req, res) {
    // desconstructs our req object and assigns query to the params of the req
    const { query: params } = req;
    // calls our axios get method to hit our google api returns in form of json
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params
      })
// filter our google result json responce with specific params to return an array of info below (title, infolink, authors, description, imagelinks, and image links thumbnail)
      .then(results =>
        results.data.items.filter(
          result =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )
      // searches our database and matches book and id
      .then(apiBooks =>
        db.Book.find().then(dbBooks =>
          apiBooks.filter(apiBook =>
            dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
          )
        )
      )
      // responds with a json of books or if error responds with error 422
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
  }
};
