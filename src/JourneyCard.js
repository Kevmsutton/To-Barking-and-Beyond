import React from "react";
import moment from "moment";

class JourneyCard extends React.Component {
  render() {
    const { journey } = this.props;
    return (
      <div className="jCard">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Underground.svg/1200px-Underground.svg.png" />
        <br />
        <br />
        <p>Depart: {moment(journey.startDateTime).format("LLLL")}</p>
        <p>Duration: {journey.duration} mins</p>
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
