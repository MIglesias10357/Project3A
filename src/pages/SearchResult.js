import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function MovieSearchResult(props) {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Props go here</h1>
            
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default MovieSearchResult;
