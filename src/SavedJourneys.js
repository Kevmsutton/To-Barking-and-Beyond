import React from "react";
import SaveJourneyForm from "./SaveJourneyForm.js";

class SavedJourneys extends React.Component {
  state = {
    to: "",
    from: "",
    journeyIsSaved: null,
    savedJourneys: []
  };

  componentDidMount(){
      fetch()
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

  render() {
    return (
      <div>
        <SaveJourneyForm
          handleToChange={this.handleToChange}
          handleFromChange={this.handleFromChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <ListOfSavedJourneys>
      </div>
    );
  }
}

export default SavedJourneys;
