import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    movie: {}
  };

  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {    
    API.getMovie(this.props.match.params.id)
      .then(res => this.setState({ movie: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.movie)
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.movie.title} with {this.state.movie.actors}
              </h1>
              <img alt={this.state.movie.title} className="img-fluid" src={this.state.movie.imageURL}  />
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Plot</h1>
              <p>
                {this.state.movie.plot}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Review</h1>
              <p>
                {this.state.movie.review}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/movies">← MoveHub! Search</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
