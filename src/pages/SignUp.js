import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";
import { Link } from "react-router-dom";
import API from "../utils/API";

class SignUp extends Component {
  state = {
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    city: "",
    state: "",
    age: "",
    gender: "",
    occupation: "",
    facebook: "",
    twitter: "",
    instagram: "",
    snapchat: "",
    youtube: ""
  };

  componentDidMount() {
    console.log("mounted");
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  SignUp = event => {   
    event.preventDefault(); 
    var newUser = {
      username: this.state.username,
      password: this.state.password,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      city: this.state.city,
      state: this.state.state,
      age: this.state.age,
      gender: this.state.gender,
      occupation: this.state.occupation,
      facebook: this.state.facebook,
      twitter: this.state.twitter,
      instagram: this.state.instagram,
      snapchat: this.state.snapchat, 
      youtube: this.state.youtube
    }
    console.log(newUser)
    if (this.state.username && this.state.password) {
      API.saveUser(newUser)
      .then(alert("You have registered for MovieHub, please login."))
    } else {
      console.log("no username or password")
    }
  }

render() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Sign Up Page</h1>
          </Jumbotron>
          <Input
            value={this.state.username}
            onChange={this.handleInputChange}
            name="username"
            placeholder="Username (required)"
          />
          <Input
            value={this.state.password}
            onChange={this.handleInputChange}
            name="password"
            type="password"
            placeholder="password (required)"
          />
          <Input
            value={this.state.firstname}
            onChange={this.handleInputChange}
            name="firstname"
            placeholder="First Name"
          />
          <Input
            value={this.state.lastname}
            onChange={this.handleInputChange}
            name="lastname"
            placeholder="Last Name"
          />
          <Input
            value={this.state.city}
            onChange={this.handleInputChange}
            name="city"
            placeholder="City"
          />
          <Input
            value={this.state.state}
            onChange={this.handleInputChange}
            name="state"
            placeholder="State"
          />
          <Input
            value={this.state.age}
            onChange={this.handleInputChange}
            name="age"
            placeholder="Age"
          />
          <Input
            value={this.state.gender}
            onChange={this.handleInputChange}
            name="gender"
            placeholder="Gender"
          />
          <Input
            value={this.state.occupation}
            onChange={this.handleInputChange}
            name="occupation"
            placeholder="Occupation"
          />
          <Input
            value={this.state.facebook}
            onChange={this.handleInputChange}
            name="facebook"
            placeholder="Facebook"
          />
          <Input
            value={this.state.twitter}
            onChange={this.handleInputChange}
            name="twitter"
            placeholder="Twitter"
          />
          <Input
            value={this.state.instagram}
            onChange={this.handleInputChange}
            name="instagram"
            placeholder="Instagram"
          />
          <Input
            value={this.state.snapchat}
            onChange={this.handleInputChange}
            name="snapchat"
            placeholder="Snapchat"
          />
          <Input
            value={this.state.youtube}
            onChange={this.handleInputChange}
            name="youtube"
            placeholder="Youtube"
          />
          <FormBtn
            disabled={!(this.state.username && this.state.password)}
            onClick={this.SignUp}>
            <Link to="/">Sign up!</Link>
          </FormBtn>
        </Col>
      </Row>
      <Row>
        <Col size="md-2">
          <Link to="/">← Back to Home</Link>
        </Col>
      </Row>
    </Container>
  );
}

};

export default SignUp;