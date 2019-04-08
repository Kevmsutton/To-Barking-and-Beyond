import React from "react";
import SavedJourneyCard from "./SavedJourneyCard.js";

class ListofSavedJourneys extends React.Component {
  render() {
    const {
      savedJourneys,
      getSavedJourneyData,
      savedJourneysFromAPI
    } = this.props;
    console.log(getSavedJourneyData);
    return (
      <div className="sJCardContainer">
        {savedJourneys.map(savedJourney => (
          <SavedJourneyCard
            key={savedJourney.id}
            savedJourney={savedJourney}
            getSavedJourneyData={getSavedJourneyData}
            savedJourneysFromAPI={savedJourneysFromAPI}
          />
        ))}
      </div>
    );
  }
}

export default ListofSavedJourneys;
