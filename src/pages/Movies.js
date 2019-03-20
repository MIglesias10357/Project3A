import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import movieAPI from "../utils/omdbAPI"
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Movies extends Component {
  state = {
    movies: [],
    title: "",
    actors: "",
    plot: "",
    review: "",
    user: "test"
  };

  componentDidMount() {
    
    this.loadMovies();
  }

  loadMovies = () => {
    // console.log(user)
    API.getMovies()
      .then(res =>
        this.setState({ movies: res.data, title: "", actors: "", review: "", plot: "" })
      )
      .catch(err => console.log(err));
  };

  deleteMovie = id => {
    API.deleteMovie(id)
      .then(res => this.loadMovies())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  movieSearch = event => {
    event.preventDefault();
    if (this.state.title) {
      var newReview = this.state.review;
      var user = this.state.user;
      movieAPI.movieSearch(this.state.title)
        .then(function (res) {
          console.log(res)
          var newMovieData = {
            title: res.data.Title,
            actors: res.data.Actors,
            plot: res.data.Plot,
            review: newReview ,
            imageURL: res.data.Poster,
            users: user            
          }
          console.log(newMovieData);
          return API.saveMovie(newMovieData);                  
        })       
        .then(res => this.loadMovies())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Search for a Movie!</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />

              <TextArea 
                value={this.state.review}
                onChange={this.handleInputChange}
                name="review"
                placeholder="Enter your review (optional)"
              />
                
                <Link to="/friends">MovieHub! Friends</Link>

              <FormBtn
                disabled={!(this.state.title)}
                onClick={this.movieSearch}
              >
                Add to your Movies
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>My Movies!</h1>
            </Jumbotron>
            {this.state.movies.length ? (
              <List>
                {this.state.movies.map(movie => (
                  <ListItem key={movie._id}>
                    <Link to={"/movies/" + movie._id}>
                      <strong>
                        {movie.title} with {movie.actors}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteMovie(movie._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Movies;
