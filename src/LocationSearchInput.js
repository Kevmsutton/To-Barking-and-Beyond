import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

class LocationSearchInput extends React.Component {
  state = {
    address: "",
    results: "",
    latLng: null
  };

  handleChange = address => {
    this.setState({ address });
  };

  render() {
    console.log(this.props);
    return (
      <PlacesAutocomplete
        value={
          this.props.addressOne ? this.props.addressOne : this.props.addressTwo
        }
        onChange={
          this.props.handleAddressChangeOne
            ? this.props.handleAddressChangeOne
            : this.props.handleAddressChangeTwo
        }
        onSelect={
          this.props.handleSelectOne
            ? this.props.handleSelectOne
            : this.props.handleSelectTwo
        }
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              value={this.props.addressOne}
              {...getInputProps({
                placeholder: "Search Places ...",
                className: "location-search-input"
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}
                  >
                    <span>
                      {suggestion.description.toLowerCase().includes("uk")
                        ? suggestion.description
                        : ""}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default LocationSearchInput;
