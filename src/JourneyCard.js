import React from "react";
import moment from "moment";

class JourneyCard extends React.Component {
  render() {
    const { journey } = this.props;
    return (
      <div className="jCard">
        <p>Depart: {moment(journey.startDateTime).format("LLLL")}</p>
        <br />
        <p>Duration: {journey.duration} mins</p>
        <br />
        <p>Fare: {journey.fare ? journey.fare.totalCost : "0"} pence</p>
        <ul>
          {journey.legs.map((leg, index) => (
            <li key={index}>
              {leg.mode.name} : {leg.departurePoint.commonName}
              <br />
              {leg.instruction.summary}
              <br />
            </li>
          ))}
        </ul>
        <p>Arrive: {moment(journey.arrivalDateTime).format("LT")}</p>
      </div>
    );
  }
}

export default JourneyCard;
