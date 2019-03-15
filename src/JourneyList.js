import React from "react";
import JourneyCard from "./JourneyCard.js";

class JourneyList extends React.Component {
  render() {
    const { trips, getFirstStationId } = this.props;
    console.log(trips.journeys);
    return (
      <div>
        {trips.journeys.map(journey => (
          <JourneyCard key={journey.startDateTime} journey={journey} />
        ))}
      </div>
    );
  }
}

export default JourneyList;
