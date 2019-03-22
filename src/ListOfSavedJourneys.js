import React from "react";
import SavedJourneyCard from "./SavedJourneyCard.js";

class ListofSavedJourneys extends React.Component {
  render() {
    const { savedJourneys, getFirstStationId } = this.props;
    console.log(getFirstStationId);
    return (
      <div>
        {savedJourneys.map(savedJourney => (
          <SavedJourneyCard
            key={savedJourney.id}
            savedJourney={savedJourney}
            getFirstStationId={getFirstStationId}
          />
        ))}
      </div>
    );
  }
}

export default ListofSavedJourneys;
