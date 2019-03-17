import React from "react";
import moment from "moment";

class JourneyCard extends React.Component {
  render() {
    const { journey } = this.props;
    return (
      <div className="bg-dark-red dib br3 pa3 ma2">
        <img
          src="https://cdn.dribbble.com/users/200656/screenshots/3266438/london-tube.gif"
          height="300"
          width="300"
          alt="Tube"
        />
        <p>Depart: {moment(journey.startDateTime).format("LT")}</p>
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
