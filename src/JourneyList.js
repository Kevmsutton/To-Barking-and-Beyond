import React from "react";
import JourneyCard from "./JourneyCard.js";

class JourneyList extends React.Component {
  render() {
    const { trips } = this.props;
    console.log(trips.journeys);
    return (
      <div className="jCardContainer">
        {trips.journeys.map((journey, index) => (
          <JourneyCard key={index} journey={journey} />
        ))}
      </div>
    );
  }
}

export default JourneyList;
