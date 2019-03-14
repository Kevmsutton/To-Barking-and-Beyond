import React from "react";

class JourneyCard extends React.Component {
  render() {
    const { journey } = this.props;
    return (
      <div className="bg-dark-red dib br3 pa3 ma2">
        <img
          src="https://cdn.dribbble.com/users/200656/screenshots/3266438/london-tube.gif"
          height="300"
          width="300"
        />
        <p>Depart: {journey.startDateTime}</p>
        <p>Duration: {journey.duration} mins</p>
        <p>Fare: {journey.fare ? journey.fare.totalCost : "0"} pence</p>
        <ul>
          {journey.legs.map(leg => (
            <li>
              {leg.mode.name} from: {leg.departurePoint.commonName}
              <br />
              take the: {leg.instruction.summary}
              <br />
            </li>
          ))}
        </ul>
        <p>Arrive: {journey.arrivalDateTime}</p>
      </div>
    );
  }
}

export default JourneyCard;
