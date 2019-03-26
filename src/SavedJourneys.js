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
    const {
      getSavedJourneyData,
      userId,
      savedJourneysFromAPI,
      trips,
      isLoaded
    } = this.props;
    console.log(this.props);
    return (
      // <div>
      //   {!trips ? (
      //     <div>
      //       <h3>Planning your trip...</h3>
      //       <img
      //         src="https://cdn.dribbble.com/users/200656/screenshots/3266438/london-tube.gif"
      //         height="400"
      //         width="400"
      //         alt="Tube"
      //       />
      //     </div>
      //   ) : (
      //     ""
      //   )}
      <div>
        <SaveJourneyForm
          handleToChange={this.handleToChange}
          handleFromChange={this.handleFromChange}
          handleFormSubmit={this.handleFormSubmit}
          userId={userId}
          savedJourneysFromAPI={savedJourneysFromAPI}
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
      // </div>
    );
  }
}

export default SavedJourneys;
