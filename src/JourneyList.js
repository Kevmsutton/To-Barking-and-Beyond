import React from "react";
import JourneyCard from "./JourneyCard.js";
import { Redirect } from "react-router-dom";

class JourneyList extends React.Component {
  render() {
    const { trips } = this.props;
    console.log(trips.journeys);
    return (
      <div className="jCardContainer">
        {trips.journeys !== undefined ? (
          trips.journeys.map((journey, index) => (
            <JourneyCard key={index} journey={journey} />
          ))
        ) : (
          <div className="waitingGif">
            <Redirect to="/results" />
            <h3>Planning your trip...</h3>
            <img
              src="https://cdn.dribbble.com/users/200656/screenshots/3266438/london-tube.gif"
              height="400"
              width="400"
              alt="Tube"
            />
          </div>
        )}
      </div>
    );
  }
}

export default JourneyList;
