import React, { Component } from "react";
import "./App.css";
import JourneyList from "./JourneyList.js";
import "tachyons";

class App extends Component {
  state = {
    isLoaded: false,
    trips: null,
    stationOneId: null,
    stationTwoId: null
  };

  getFirstStationId(stationOne, stationTwo) {
    const app_id = "b4a85c72";
    const app_key = "477d4bfa78405cbb4359d721fc31dd92";
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
  }

  getSecondStationId(stationTwo) {
    const app_id = "b4a85c72";
    const app_key = "477d4bfa78405cbb4359d721fc31dd92";
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
    const app_id = "b4a85c72";
    const app_key = "477d4bfa78405cbb4359d721fc31dd92";
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

  render() {
    const { isLoaded, trips } = this.state;
    return (
      <div>
        {isLoaded ? (
          <JourneyList
            trips={trips}
            getFirstStationId={this.getFirstStationId}
          />
        ) : (
          "Loading"
        )}
        <div>
          <button onClick={() => this.getFirstStationId("balham", "bank")}>
            Click
          </button>
        </div>
      </div>
    );
  }
}

export default App;
