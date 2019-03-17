import React from "react";
import { Redirect } from "react-router-dom";
import { Button } from "reactstrap";

class PlannerForm extends React.Component {
  state = {
    to: "",
    from: "",
    toResults: null
  };

  handleToChange = event => {
    this.setState({ to: event.target.value });
  };

  handleFromChange = event => {
    this.setState({ from: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ toResults: true });
    this.props.getFirstStationId(this.state.to, this.state.from);
  };

  render() {
    if (this.state.toResults === true) {
      return <Redirect to="/results" />;
    }
    return (
      <div className="bg-dark-red dib br3 pa3 ma2">
        <h3>Plan Your Journey</h3>
        <form>
          <input
            type="text"
            name="to"
            placeholder="From..."
            value={this.state.to}
            onChange={this.handleToChange}
          />
          <br />
          <br />
          <input
            type="text"
            name="from"
            placeholder="To..."
            value={this.state.from}
            onChange={this.handleFromChange}
          />
          <br />
          <br />
          <Button onClick={event => this.handleFormSubmit(event)}>Now</Button>
        </form>
      </div>
    );
  }
}

export default PlannerForm;
