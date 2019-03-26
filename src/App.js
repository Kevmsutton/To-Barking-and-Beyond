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
import SavedJourneys from "./SavedJourneys.js";
import API from "./API.js";
import Results from "./Results.js";
import Footer from "./Footer.js";

const app_id = process.env.REACT_APP_API_KEY_JP_APP_Id;
const app_key = process.env.REACT_APP_API_KEY_JP_APP;

class App extends Component {
  state = {
    userId: null,
    username: null,
    isLoaded: false,
    trips: null,
    stationOneId: null,
    stationTwoId: null,
    date: "",
    time: "",
    stepFreeCheckBox: false,
    busCheckBox: false,
    tubeCheckBox: false,
    modes: [],
    savedJourneys: null
  };

  signin = user => {
    localStorage.setItem("token", user.token);
    localStorage.setItem("userId", user.userId);
    console.log(user);
    this.setState({ username: user.username });
    this.setState({ userId: user.userId });
    this.savedJourneysFromAPI();
  };

  signOut = () => {
    localStorage.removeItem("token");
    this.setState({ username: null, userId: null });
  };

  componentDidMount() {
    API.validate().then(userData => {
      if (userData.error) {
        this.signOut();
      } else {
        this.signin(userData);
      }
    });
  }

  savedJourneysFromAPI = () => {
    API.getJourneys().then(journeyData =>
      this.setState({ savedJourneys: journeyData })
    );
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

  getJourneyData = () => {
    const stepFreeAccess = this.state.stepFreeCheckBox
      ? "&AccessibilityPreference=StepFreeToVehicle"
      : "";
    const bus = this.state.busCheckBox ? "&Mode=bus" : "";
    const tube = this.state.tubeCheckBox ? "&Mode=tube" : "";
    // can incorp chosing various modes of transport with https://api.tfl.gov.uk/Journey/JourneyResults/1000149/to/1000266?mode=bus, tube&app_id=b4a85c72&app_key=477d4bfa78405cbb4359d721fc31dd92
    fetch(
      `https://api.tfl.gov.uk/journey/journeyresults/${
        this.state.stationOneId
      }/to/${this.state.stationTwoId}?${this.state.date}${
        this.state.time
      }${stepFreeAccess}${bus}${tube}
      &app_id=${app_id}&app_key=${app_key}`
    )
      .then(resp => resp.json())
      .then(journeyData =>
        this.setState({ trips: journeyData, isLoaded: true }, () =>
          console.log(this.state.trips)
        )
      );
  };

  getSavedJourneyData = (
    location_1_lat,
    location_1_long,
    location_2_lat,
    location_2_long
  ) => {
    fetch(
      `https://api.tfl.gov.uk/journey/journeyresults/${location_1_lat},
      ${location_1_long}/to/${location_2_lat},
      ${location_2_long}?app_id=${app_id}&app_key=${app_key}`
    )
      .then(resp => resp.json())
      .then(journeyData =>
        this.setState({ trips: journeyData, isLoaded: true }, () =>
          console.log(this.state.trips)
        )
      );
  };

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

  handleBusChange = () => {
    this.setState({ busCheckBox: !this.state.busCheckBox });
  };

  handleTubeChange = () => {
    this.setState({ tubeCheckBox: !this.state.tubeCheckBox });
  };

  render() {
    const { isLoaded, trips } = this.state;
    return (
      <Router>
        <div>
          <NavBar
            isLoadedToFalsey={this.isLoadedToFalsey}
            username={this.state.username}
            signOut={this.signOut}
          />
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
                handleTubeChange={this.handleTubeChange}
                handleBusChange={this.handleBusChange}
                busCheckBox={this.state.busCheckBox}
                tubeCheckBox={this.state.tubeCheckBox}
              />
            )}
          />
          <Route
            exact
            path="/results"
            render={props => <Results {...props} trips={this.state.trips} />}
          />
          <Route
            exact
            path="/login"
            component={routerProps => (
              <Login signin={this.signin} {...routerProps} />
            )}
          />
          <Route exact path="/signup" component={Signup} />
          <Route
            exact
            path="/savedjourneys"
            component={props =>
              trips ? (
                ""
              ) : (
                <SavedJourneys
                  {...props}
                  getSavedJourneyData={this.getSavedJourneyData}
                  username={this.state.username}
                  savedJourneys={this.state.savedJourneys}
                  savedJourneysFromAPI={this.savedJourneysFromAPI}
                  userId={this.state.userId}
                  trips={this.state.trips}
                  isLoaded={this.state.isLoaded}
                />
              )
            }
          />
          {isLoaded ? <JourneyList trips={trips} /> : ""}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
