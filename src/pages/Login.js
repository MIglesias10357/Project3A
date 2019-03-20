import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";
import { Link } from "react-router-dom";
import API from "../utils/API";

class Login extends Component {
    state = {
        username: [],
        password: ""
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

    signIn = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {          
          API.verifyCredentials(this.state.username, this.state.password)
            .then(function (res) {               
              if (res.data.length === 0){
                  alert("Invalid Username or Password. Try again!")
              } else {
                  alert("CREDENTIALS VERIFIED ... THIS IS WHERE WE NEED TO MAKE IT LOAD NEW PAGE")
                  //NEED TO CREATE LOGIC TO SEND USER TO THE MOVIES PAGE AND KEEP THE USERNAME AS THE CURRENT STATE 
              }                             
            })           
            .catch(err => console.log(err));
        }
      };
              

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>MovieHub!</h1>
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
                            placeholder="Password (required)"
                        />
                        <FormBtn
                            disabled={!(this.state.username && this.state.password)}
                            onClick={this.signIn}
                        >Sign In
                            {/* <Link to="/movies">Sign In</Link> */}
                        </FormBtn>                                                  
                        
                        <Link to="/signUp">New User?</Link>
                           
                        
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Login;
