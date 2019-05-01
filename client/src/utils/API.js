// imports axios
import axios from "axios";

// exports all of our crud functions to be used all over from the front end
export default {
  // gets books
  getBooks: function(q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  // returns saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // deletes books
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  //saves book to db
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
