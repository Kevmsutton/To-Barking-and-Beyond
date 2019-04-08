import React from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";

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

  handleFormSubmit = event => {
    event.preventDefault();
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
        })
          .then(resp => resp.json())
          .then(data => {
            data.id
              ? alert("You have succesfully created an account please login")
              : alert("User name already exists");
            this.props.history.push("/login");
          });
  };

  render() {
    return (
      <div className="signup">
        <Form onSubmit={event => this.handleFormSubmit(event)}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                  onChange={event => this.firstNameHandleChange(event)}
                  type="string"
                  name="first name"
                  id="first name"
                  placeholder=""
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input
                  onChange={event => this.lastNameHandleChange(event)}
                  type="string"
                  name="first name"
                  id="first name"
                  placeholder=""
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="username">username</Label>
            <Input
              onChange={event => this.userNameHandleChange(event)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input onChange={event => this.emailHandleChange(event)} required />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              onChange={event => this.passwordHandleChange(event)}
              required
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
              required
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Signup;
