import React from "react";
import SaveJourneyForm from "./SaveJourneyForm.js";
import ListOfSavedJourneys from "./ListOfSavedJourneys.js";

class SavedJourneys extends React.Component {
  state = {
    to: "",
    from: "",
    journeyIsSaved: null,
    savedJourneys: []
  };

  componentDidMount() {
    fetch(`http://localhost:3000/journeys/`)
      .then(resp => resp.json())
      .then(data => this.setState({ savedJourneys: data }));
  }

  handleToChange = event => {
    this.setState({ to: event.target.value });
  };

  handleFromChange = event => {
    this.setState({ from: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    //Now pass the collected data to the back end to save... including lat long etc...
  };

  journeyGetsSaved = () => {
    this.setState({ journeyIsSaved: true });
  };

  //next up if the newly created journey is created on the server i need a function to confirm it has been
  // created and then stuff it in the savedJourneys array to be rendered!

  render() {
    const { getFirstStationId } = this.props;
    console.log(this.props);
    return (
      <div>
        <SaveJourneyForm
          handleToChange={this.handleToChange}
          handleFromChange={this.handleFromChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        {this.state.savedJourneys ? (
          <ListOfSavedJourneys
            savedJourneys={this.state.savedJourneys}
            getFirstStationId={getFirstStationId}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default SavedJourneys;
