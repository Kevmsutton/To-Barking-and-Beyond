import React from "react";
import API from "./API";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = () => {
    const { signin, history } = this.props;
    const user = this.state;
    API.signin(user).then(data => {
      if (data.error) {
        alert("something is wrong!");
      } else {
        signin(data);
        history.push("/savedjourneys");
      }
    });
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    const { username, password } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <div className="signup">
        <Form>
          <FormGroup>
            <Label for="repeat password"> UserName</Label>
            <Input
              id="usernameInput"
              label="Username"
              value={username}
              onChange={handleChange}
              margin="normal"
              name="username"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="passwordInput"
              label="Password"
              value={password}
              onChange={handleChange}
              margin="normal"
              name="password"
              type="password"
            />
          </FormGroup>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
