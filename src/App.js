import React, { Component } from "react";
import "./App.css";
import JourneyList from "./JourneyList.js";
import "tachyons";
import PlannerForm from "./PlannerForm.js";
import NavBar from "./NavBar.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./Signup.js";
import Login from "./Login.js";
import LocationSearchInput from "./LocationSearchInput.js";

const app_id = process.env.REACT_APP_API_KEY_JP_APP_Id;
const app_key = process.env.REACT_APP_API_KEY_JP_APP;

class App extends Component {
  state = {
    isLoaded: false,
    trips: null,
    stationOneId: null,
    stationTwoId: null,
    date: "",
    time: "",
    stepFreeCheckBox: false
  };

  getFirstStationId = (stationOne, stationTwo) => {
    fetch(
      `https://api.tfl.gov.uk/StopPoint/Search?query=${stationOne}&app_id=${app_id}&app_key=${app_key}`
    )
      .then(resp => resp.json())
      .then(station =>
        this.setState({ stationOneId: station.matches[0].icsId }, () =>
          this.getSecondStationId(stationTwo)
        )
      )
      .then(() => console.log(this.state.stationOneId));
  };

  getSecondStationId(stationTwo) {
    fetch(
      `https://api.tfl.gov.uk/StopPoint/Search?query=${stationTwo}&app_id=${app_id}&app_key=${app_key}`
    )
      .then(resp => resp.json())
      .then(station =>
        this.setState({ stationTwoId: station.matches[0].icsId })
      )
      .then(() => this.getJourneyData());
  }

  getJourneyData() {
    const stepFreeAccess = this.state.stepFreeCheckBox
      ? "&AccessibilityPreference=StepFreeToVehicle"
      : "";
    fetch(
      `https://api.tfl.gov.uk/journey/journeyresults/${
        this.state.stationOneId
      }/to/${this.state.stationTwoId}?${this.state.date}${
        this.state.time
      }${stepFreeAccess}
      &app_id=${app_id}&app_key=${app_key}`
    )
      .then(resp => resp.json())
      .then(journeyData =>
        this.setState({ trips: journeyData, isLoaded: true }, () =>
          console.log(this.state.trips)
        )
      );
  }

  handleDateChange = event => {
    this.setState({ date: `Date=${event.target.value.replace(/-/gi, "")}` });
  };

  handleTimeChange = event => {
    this.setState({ time: `&Time=${event.target.value.replace(/:/gi, "")}&` });
  };

  isLoadedToFalsey() {
    this.setState({ isLoaded: false });
  }

  handleStepFreeChange = () => {
    this.setState({ stepFreeCheckBox: !this.state.stepFreeCheckBox });
  };

  render() {
    const { isLoaded, trips } = this.state;
    return (
      <Router>
        <div>
          <LocationSearchInput />
          <NavBar isLoadedToFalsey={this.isLoadedToFalsey} />
          {/* passing props to planner form */}
          <Route
            exact
            path="/"
            render={props => (
              <PlannerForm
                {...props}
                getFirstStationId={this.getFirstStationId}
                handleDateChange={this.handleDateChange}
                handleTimeChange={this.handleTimeChange}
                time={this.state.time}
                date={this.state.date}
                handleStepFreeChange={this.handleStepFreeChange}
                stepFreeCheckBox={this.state.stepFreeCheckBox}
              />
            )}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          {isLoaded ? <JourneyList trips={trips} /> : ""}
        </div>
      </Router>
    );
  }
}

export default App;
