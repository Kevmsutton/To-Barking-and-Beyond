import React, { Component } from "react";
import "./App.css";
import JourneyList from "./JourneyList.js";
import "tachyons";
import PlannerForm from "./PlannerForm.js";
import NavBar from "./NavBar.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./Signup.js";
import Login from "./Login.js";

const app_id = process.env.REACT_APP_API_KEY_JP_APP_Id;
const app_key = process.env.REACT_APP_API_KEY_JP_APP;

class App extends Component {
  state = {
    isLoaded: false,
    trips: null,
    stationOneId: null,
    stationTwoId: null,
    date: null
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
    fetch(
      `https://api.tfl.gov.uk/journey/journeyresults/${
        this.state.stationOneId
      }/to/${this.state.stationTwoId}?app_id=${app_id}&app_key=${app_key}`
    )
      .then(resp => resp.json())
      .then(journeyData =>
        this.setState({ trips: journeyData, isLoaded: true }, () =>
          console.log(this.state.trips)
        )
      );
  }

  isLoadedToFalsey() {
    this.setState({ isLoaded: false });
  }

  render() {
    const { isLoaded, trips } = this.state;
    return (
      <Router>
        <div>
          <NavBar isLoadedToFalsey={this.isLoadedToFalsey} />
          {/* passing props to planner form */}
          <Route
            exact
            path="/"
            render={props => (
              <PlannerForm
                {...props}
                getFirstStationId={this.getFirstStationId}
                date={this.state.date}
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

// `https://api.tfl.gov.uk/journey/journeyresults/1000266/to/1000013?Date=20190328&Time=1215&AccessibilityPreference=stepfreetovehicle&Mode=bus&app_id=b4a85c72&app_key=477d4bfa78405cbb4359d721fc31dd92`;
