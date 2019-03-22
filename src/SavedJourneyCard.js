import React from "react";
import { Button } from "reactstrap";

class SavedJourneyCard extends React.Component {
  render() {
    const { savedJourney, getFirstStationId } = this.props;
    console.log(savedJourney);
    return (
      <div className="bg-dark-red dib br4 pa5 ma5">
        <p>Saved Journey Name: {savedJourney.journey_name.toUpperCase()}</p>
        <Button onClick={() => getFirstStationId("bank", "moorgate")}>
          Go
        </Button>
      </div>
    );
  }
}

export default SavedJourneyCard;
