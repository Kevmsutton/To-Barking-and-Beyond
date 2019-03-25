import React from "react";
import SaveJourneyForm from "./SaveJourneyForm.js";
import ListOfSavedJourneys from "./ListOfSavedJourneys.js";

class SavedJourneys extends React.Component {
  state = {
    to: "",
    from: "",
    journeyIsSaved: null
  };

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
    const { getSavedJourneyData } = this.props;
    console.log(this.props);
    return (
      <div>
        <SaveJourneyForm
          handleToChange={this.handleToChange}
          handleFromChange={this.handleFromChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        {this.props.savedJourneys ? (
          <ListOfSavedJourneys
            savedJourneys={this.props.savedJourneys}
            getSavedJourneyData={getSavedJourneyData}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default SavedJourneys;
