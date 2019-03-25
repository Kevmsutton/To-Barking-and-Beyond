import React from "react";
import { Button } from "reactstrap";
import { Input } from "reactstrap";
import API from "./API";

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
      <div>
        <Input
          id="usernameInput"
          label="Username"
          value={username}
          onChange={handleChange}
          margin="normal"
          name="username"
        />
        <br />
        <Input
          id="passwordInput"
          label="Password"
          value={password}
          onChange={handleChange}
          margin="normal"
          name="password"
          type="password"
        />
        <br />
        <Button onClick={handleSubmit} variant="contained" color="primary">
          SUBMIT
        </Button>
      </div>
    );
  }
}

export default Login;
