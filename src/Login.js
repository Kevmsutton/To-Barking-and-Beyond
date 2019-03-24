import React from "react";
import { Button } from "reactstrap";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = () => {};

  handleNameChange = event => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div className="bg-dark-red dib br4 pa4 ma4">
        <h3>Login</h3>
        <form>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={event => this.handleNameChange(event)}
          />
          <br />
          <br />
          <input
            type="text"
            name="password"
            placeholder="Password"
            onChange={event => this.handlePasswordChange(event)}
          />
          <br />
          <br />
          <Button
            onClick={() =>
              this.props.signin({
                username: this.state.username,
                password: this.state.password
              })
            }
          >
            Login
          </Button>
          <br />
          <br />
        </form>
      </div>
    );
  }
}

export default Login;
