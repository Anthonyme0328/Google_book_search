// requires or database from the model route
const db = require("../models");

// defines all our crud operations to manuipulate our database
module.exports = {
  // finds all books based of of request
  findAll: function(req, res) {
    db.Book.find(req.query)
    // returns json of book data
      .then(dbBook => res.json(dbBook))
      //sends error status code if no book
      .catch(err => res.status(422).json(err));
  },
  // finds books based off of id  
  findById: function(req, res) {
    db.Book.findById(req.params.id)
    // then returns json from database basded off of id
      .then(dbBook => res.json(dbBook))
      // or responds with error if no data
      .catch(err => res.status(422).json(err));
  },
  // creates book for database
  create: function(req, res) {
    db.Book.create(req.body)
      .then(dbBook => res.json(dbBook))
      // sends error if cannot create
      .catch(err => res.status(422).json(err));
  },
  // updates the book data
  update: function(req, res) {
    db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbBook => res.json(dbBook))
      // sends error if cannot update the book 
      .catch(err => res.status(422).json(err));
  },
  // removes book from database
  remove: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbBook => dbBook.remove())
      .then(dbBook => res.json(dbBook))
      // sends error if no book tobe removed
      .catch(err => res.status(422).json(err));
  }
};
