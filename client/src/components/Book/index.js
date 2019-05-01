// imports react and the list/ listitems/ and our grid system and also our styling page
import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

// function that creates the books to be displayed with title, subtitle, author, link, description, image, and button
function Book({ title, subtitle, authors, link, description, image, Button }) {
  return (
    // creates the list item
    <ListItem>
      {/* creates row */}
      <Row className="flex-wrap-reverse">
      {/* creates 8 cols */}
        <Col size="md-8">
          <h3 className="font-italic">{title}</h3>
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        </Col>
        {/* creates 4 cols */}
        <Col size="md-4">
          <div className="btn-container">
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a>
            {/* creates the button */}
            <Button />
          </div>
        </Col>
      </Row>
      {/* creates a new row */}
      <Row>
        {/* creates a new 6 cols */}
        <Col size="md-6">
          <p className="font-italic small">Written by {authors}</p>
        </Col>
      </Row>
      {/* creates new row */}
      <Row>
        {/* creates 12 cols, 4 on sm screen, and 2 on a md screen */}
        <Col size="12 sm-4 md-2">
          <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
        </Col>
        <Col size="12 sm-8 md-10">
          <p>{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

// exports book to be reused on different pages
export default Book;
