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
    const {
      handleDateChange,
      handleTimeChange,
      handleStepFreeChange,
      stepFreeCheckBox,
      busCheckBox,
      tubeCheckBox,
      handleBusChange,
      handleTubeChange,
      time,
      date
    } = this.props;

    console.log(date);
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
          <input type="date" onChange={handleDateChange} />
          <input type="time" onChange={handleTimeChange} />
          <br />
          <br />
          <Button onClick={event => this.handleFormSubmit(event)}>Later</Button>
          <br />
          <br />

          <label>
            <input
              type="checkbox"
              defaultChecked={stepFreeCheckBox}
              onChange={handleStepFreeChange}
            />
            <br />
            Step Free Access
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              defaultChecked={busCheckBox}
              onChange={handleBusChange}
            />
            <br />
            Bus Only
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              defaultChecked={tubeCheckBox}
              onChange={handleTubeChange}
            />
            <br />
            Tube Only
          </label>
        </form>
      </div>
    );
  }
}

export default PlannerForm;
