import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";

function Friends() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>MovieHub! Friends</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
           <center><h3>Luis Gonzalez, alteregoz@yahoo.com, facebook, twitter, City, State</h3>
           <h3>Johnathan Day, freaklikeme@yahoo.com, facebook, twitter, City, State</h3>
           <h3>Nancy Gray, 2manycats@gmail.com, facebook, twitter, City, State</h3>
           <h3>Les Reed, power2day@msn.com, facebook, twitter, City, State</h3>
           <h3>Dorian Smith, last1out@gmail.com, facebook, twitter, City, State</h3></center>                        
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
          <Link to="/movies">MovieHub! Search</Link>
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default Friends;    
