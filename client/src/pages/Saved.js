// imports react, jumbotron, card, book, a footer, our api the bootstrap grid system
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

// sets the state of the books array to empty
class Saved extends Component {
  state = {
    books: []
  };


  componentDidMount() {
    this.getSavedBooks();
  }

  // gets saved books from api and renders them
  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        // sets state to reesponse data
        this.setState({
          books: res.data
        })
      )
      // catches errors and console logs them
      .catch(err => console.log(err));
  };

  // deletes books by id
  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  // renders the componets of the page
  render() {
    return (
      // sets a container for the page
      <Container>
        {/* creates a row  */}
        <Row>
          {/* creates 12 colums on a medium screen or else has 12 as default */}
          <Col size="md-12">
          {/* creates a jumbotron */}
            <Jumbotron>
              {/* all of the text that appears on the jumbotron */}
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
        </Row>
        {/* creates another row and columns */}
        <Row>
          <Col size="md-12">
          {/* creates a card with saved books and there icon */}
            <Card title="Saved Books" icon="download">
            {/* a es6 if else statement that creates the books or returns " no saved books" */}
              {this.state.books.length ? (
                <List>
                  {/* creates the display info for the card as a list */}
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}
// exports all the saved books
export default Saved;
