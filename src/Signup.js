import React from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";
import { Redirect } from "react-router-dom";
import API from "./API.js";

class Signup extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  };

  firstNameHandleChange = event => {
    this.setState({ first_name: event.target.value });
  };

  lastNameHandleChange = event => {
    this.setState({ last_name: event.target.value });
  };

  userNameHandleChange = event => {
    this.setState({ username: event.target.value });
  };

  emailHandleChange = event => {
    this.setState({ email: event.target.value });
  };

  passwordHandleChange = event => {
    this.setState({ password: event.target.value });
  };

  handleConfirmPassword = event => {
    this.setState({ confirmPassword: event.target.value });
  };

  handleFormSubmit = () => {
    this.state.password !== this.state.confirmPassword
      ? alert("Passwords do not match")
      : fetch(`http://localhost:3000/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
          })
        }).then(response => console.log(response));
    alert("Signup succesful, please login");
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="signup">
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                  onChange={event => this.firstNameHandleChange(event)}
                  type="first name"
                  name="first name"
                  id="first name"
                  placeholder=""
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input
                  onChange={event => this.lastNameHandleChange(event)}
                  type="first name"
                  name="first name"
                  id="first name"
                  placeholder=""
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="userName">User Name</Label>
            <Input onChange={event => this.userNameHandleChange(event)} />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input onChange={event => this.emailHandleChange(event)} />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              onChange={event => this.passwordHandleChange(event)}
              type="password"
              name="password"
            />
          </FormGroup>
          <FormGroup>
            <Label for="repeat password"> Repeat Password</Label>
            <Input
              onChange={event => this.handleConfirmPassword(event)}
              type="password"
              name="password"
            />
          </FormGroup>
          <Button onClick={() => this.handleFormSubmit()}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Signup;
