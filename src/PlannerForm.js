import React from "react";
import { Redirect } from "react-router-dom";
import { Button } from "reactstrap";
import DateTimePicker from "react-widgets/lib/DateTimePicker";

class PlannerForm extends React.Component {
  state = {
    to: "",
    from: "",
    toResults: null,
    date: null,
    time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    })
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

  handleDateChange = event => {
    this.setState({ date: event.target.value.replace(/-/gi, "") });
  };

  handleTimeChange = event => {
    this.setState({ time: event.target.value });
  };

  render() {
    console.log(this.state.date);
    if (this.state.toResults === true) {
      return <Redirect to="/results" />;
    }
    return (
      <div className="bg-dark-red dib br4 pa4 ma4">
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
          <br />
          <br />
          <input type="date" onChange={this.handleDateChange} />
          <input
            type="time"
            value={this.state.time}
            onChange={this.handleTimeChange}
          />
          <br />
          <br />
          <Button onClick={event => this.handleFormSubmit(event)}>Later</Button>
        </form>
      </div>
    );
  }
}

export default PlannerForm;
