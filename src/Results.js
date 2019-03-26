import React from "react";

class Results extends React.Component {
  render() {
    const { trips } = this.props;
    return (
      <div>
        {!trips ? (
          <div>
            <h3>Planning your trip...</h3>
            <img
              src="https://cdn.dribbble.com/users/200656/screenshots/3266438/london-tube.gif"
              height="400"
              width="400"
              alt="Tube"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Results;
