import React from "react";
import { Button } from "reactstrap";

class SavedJourneyCard extends React.Component {
  render() {
    const { savedJourney, getSavedJourneyData } = this.props;
    console.log(savedJourney, getSavedJourneyData);
    return (
      <div className="bg-dark-red dib br4 pa5 ma5">
        <p>Saved Journey Name: {savedJourney.journey_name.toUpperCase()}</p>
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
