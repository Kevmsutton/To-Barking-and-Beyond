import React from "react";
import { Redirect } from "react-router-dom";
import { Button } from "reactstrap";
import LocationSearchInput from "./LocationSearchInput.js";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

const postUrl = `http://localhost:3000/journeys/`;

class SaveJourneyForm extends React.Component {
  state = {
    journeyName: null,
    addressOne: "",
    addressTwo: "",
    results: "",
    latLngOne: null,
    latLngTwo: null
  };

  handleJourneyNameChange = event => {
    this.setState({ journeyName: event.target.value });
  };

  handleAddressChangeOne = address => {
    this.setState({ addressOne: address });
  };

  handleAddressChangeTwo = address => {
    this.setState({ addressTwo: address });
  };

  handleSelectOne = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({ latLngOne: latLng }))
      // prettier-ignore
      .catch(error => console.error("Error", error))
      .then(this.setState({ addressOne: address }));
  };

  handleSelectTwo = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({ latLngTwo: latLng }))
      // prettier-ignore
      .catch(error => console.error("Error", error))
      .then(this.setState({ addressTwo: address }));
  };

  saveJourneyToDB = () => {
    fetch(postUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        journey_name: this.state.journeyName,
        addressOne: this.state.addressOne,
        addressTwo: this.state.addressTwo,
        location_1_lat: this.state.latLngOne.lat,
        location_1_long: this.state.latLngOne.lng,
        location_2_lat: this.state.latLngTwo.lat,
        location_2_long: this.state.latLngTwo.lng,
        user_id: this.props.userId
      })
    })
      .then(response => response.json())
      .then(() => this.props.savedJourneysFromAPI());
  };

  render() {
    console.log(this.props);

    return (
      // <div>
      //   <div className="saveJourneyText">
      //     Please Login To Save or acces a saved journey
      //   </div>
      <div className="saveJform">
        <h3>Save a Journey</h3>
        <form>
          <input
            className="location-search-input"
            type="text"
            name="name"
            placeholder="Name of Journey"
            value={this.props.from}
            onChange={this.handleJourneyNameChange}
          />
          <br />
          <br />
          <label>From: </label>
          <LocationSearchInput
            handleSelectOne={this.handleSelectOne}
            handleAddressChangeOne={this.handleAddressChangeOne}
            addressOne={this.state.addressOne}
          />
          <br />
          <label>To: </label>
          <LocationSearchInput
            handleSelectTwo={this.handleSelectTwo}
            handleAddressChangeTwo={this.handleAddressChangeTwo}
            addressTwo={this.state.addressTwo}
          />
          <br />
          <Button
            className="buttonFloatRight"
            onClick={() => this.saveJourneyToDB()}
          >
            Save Journey
          </Button>
          <br />
          <br />
        </form>
      </div>
      // </div>
    );
  }
}

export default SaveJourneyForm;
