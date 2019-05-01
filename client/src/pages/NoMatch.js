import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";


// creates the page if there is no match 
function NoMatch() {
  return (
    // creates a container
    <Container fluid>
    {/* creates a row */}
      <Row>
        {/* creates a 12 column grid */}
        <Col size="md-12">
        {/* creates a jumbotron with an error message */}
          <Jumbotron>
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

// exports the no match feature
export default NoMatch;
