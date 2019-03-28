import React from "react";
import { Redirect } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button, CustomInput } from "reactstrap";
import Map from "./Map.js";

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
      <div className="planner">
        <h3>Plan Your Journey</h3>
        <Form>
          <FormGroup>
            <Input
              type="text"
              name="to"
              placeholder="From..."
              value={this.state.to}
              onChange={this.handleToChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="from"
              placeholder="To..."
              value={this.state.from}
              onChange={this.handleFromChange}
            />
          </FormGroup>
          <Button
            className="buttonFloatRight"
            onClick={event => this.handleFormSubmit(event)}
          >
            Go Now
          </Button>
          <br />
          <Label>Date</Label>
          <FormGroup>
            <Input type="date" onChange={handleDateChange} />
          </FormGroup>
          <FormGroup>
            <Input type="time" onChange={handleTimeChange} />
          </FormGroup>

          <Button
            className="buttonFloatRight"
            onClick={event => this.handleFormSubmit(event)}
          >
            Go Later
          </Button>
          <br />
          <br />
          <FormGroup>
            <Label for="exampleCheckbox">Options</Label>
            <CustomInput
              type="switch"
              id="StepFreeAccess"
              name="Step Free Access"
              label="Step Free Access"
              defaultChecked={stepFreeCheckBox}
              onChange={handleStepFreeChange}
            />
            <CustomInput
              type="switch"
              id="BusOnly"
              name="customSwitch"
              label="Bus Only"
              defaultChecked={busCheckBox}
              onChange={handleBusChange}
            />
            <CustomInput
              type="switch"
              id="TubeOnly"
              name="customSwitch"
              label="Tube Only"
              defaultChecked={tubeCheckBox}
              onChange={handleTubeChange}
            />
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default PlannerForm;
