import React from "react";
import gmap from "./gmap.png";

class Map extends React.Component {
  render() {
    return (
      <div className="map">
        <div className="innermap">
          <img src={gmap} />
          <h3>Search Destination</h3>
        </div>
      </div>
    );
  }
}

export default Map;
