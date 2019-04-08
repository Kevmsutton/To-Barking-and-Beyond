import React from "react";
import { Map, Marker, GoogleApiWrapper, Autocomplete } from "google-maps-react";
// import LocationSearchInput from "./LocationSearchInput";

const JPapp_key = process.env.REACT_APP_API_KEY_JP_Goog;

class JPMap extends React.Component {
  render() {
    return (
      <div className="map">
        <div className="innermap">
          <Map
            className={"JPmap"}
            style={{ width: "90%", height: "90%", position: "relative" }}
            google={this.props.google}
            zoom={14}
            initialCenter={{
              lat: 51.5085,
              lng: -0.1257
            }}
            onClick={this.mapClicked}
          >
            <Marker onClick={this.onMarkerClick} name={"Current location"} />
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: JPapp_key
})(JPMap);
