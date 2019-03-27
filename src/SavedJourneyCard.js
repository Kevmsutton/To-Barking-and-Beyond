import React from "react";
import { Button } from "reactstrap";

class SavedJourneyCard extends React.Component {
  render() {
    const { savedJourney, getSavedJourneyData } = this.props;
    console.log(savedJourney, getSavedJourneyData);
    return (
      <div className="savedJCard">
        <p>Saved Journey Name: {savedJourney.journey_name.toUpperCase()}</p>
        <p>From : {savedJourney.addressOne.toUpperCase()}</p>
        <p>To: {savedJourney.addressTwo.toUpperCase()}</p>
        <Button
          onClick={() =>
            getSavedJourneyData(
              savedJourney.location_1_lat,
              savedJourney.location_1_long,
              savedJourney.location_2_lat,
              savedJourney.location_2_long
            )
          }
        >
          Go
        </Button>
      </div>
    );
  }
}

export default SavedJourneyCard;
