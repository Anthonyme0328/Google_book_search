// requires mongoose as a variable
const mongoose = require("mongoose");
// sets what our schema is set to
const Schema = mongoose.Schema;

// creates our structure of our new database
const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});

// creates the book schema
const Book = mongoose.model("Book", bookSchema);

// exports book schema to be used elsewhere again
module.exports = Book;
