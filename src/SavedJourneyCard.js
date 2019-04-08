import React from "react";
import { Button } from "reactstrap";

class SavedJourneyCard extends React.Component {
  state = {
    deletedJourney: null
  };

  handleDelete = savedJourney => {
    fetch(`http://localhost:3000/journeys/${savedJourney.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(() => this.props.savedJourneysFromAPI());
  };

  render() {
    const { savedJourney, getSavedJourneyData } = this.props;
    console.log(savedJourney, getSavedJourneyData);
    return (
      <div className="sJCard">
        <div className="sCardInner">
          <p>Name: {savedJourney.journey_name.toUpperCase()}</p>
          <p className="sjBox">
            From : {savedJourney.addressOne.toUpperCase()}
          </p>
          <p className="sjBox">To: {savedJourney.addressTwo.toUpperCase()}</p>
          <Button
            className="buttonFloatRight"
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
          <Button
            color="danger"
            onClick={() => this.handleDelete(savedJourney)}
          >
            Delete
          </Button>
        </div>
      </div>
    );
  }
}

export default SavedJourneyCard;
