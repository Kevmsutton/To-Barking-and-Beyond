import React from "react";

const urls = [
  "https://api.tfl.gov.uk/Line/victoria/Status?app_id=b4a85c72&app_key=477d4bfa78405cbb4359d721fc31dd92",
  "https://api.tfl.gov.uk/Line/northern/Status?app_id=b4a85c72&app_key=477d4bfa78405cbb4359d721fc31dd92",
  "https://api.tfl.gov.uk/Line/circle/Status?app_id=b4a85c72&app_key=477d4bfa78405cbb4359d721fc31dd92",
  "https://api.tfl.gov.uk/Line/bakerloo/Status?app_id=b4a85c72&app_key=477d4bfa78405cbb4359d721fc31dd92",
  "https://api.tfl.gov.uk/Line/central/Status?app_id=b4a85c72&app_key=477d4bfa78405cbb4359d721fc31dd92",
  "https://api.tfl.gov.uk/Line/jubilee/Status?app_id=b4a85c72&app_key=477d4bfa78405cbb4359d721fc31dd92",
  "https://api.tfl.gov.uk/Line/jubilee/Status?app_id=b4a85c72&app_key=477d4bfa78405cbb4359d721fc31dd92",
  "https://api.tfl.gov.uk/Line/district/Status?app_id=b4a85c72&app_key=477d4bfa78405cbb4359d721fc31dd92",
  "https://api.tfl.gov.uk/Line/dlr/Status?app_id=b4a85c72&app_key=477d4bfa78405cbb4359d721fc31dd92",
  "https://api.tfl.gov.uk/Line/metropolitan/Status?app_id=b4a85c72&app_key=477d4bfa78405cbb4359d721fc31dd92",
  "https://api.tfl.gov.uk/Line/piccadilly/Status?app_id=b4a85c72&app_key=477d4bfa78405cbb4359d721fc31dd92"
];

class LineStatus extends React.Component {
  state = {
    lineStatus: [],
    lineStatusLoaded: false
  };

  componentDidMount = () => {
    Promise.all(
      urls.map(url =>
        fetch(url)
          .then(this.checkStatus)
          .then(this.parseJSON)
          .catch(error => console.log("There was a problem!", error))
      )
    )
      .then(lineStati => this.setState({ lineStatus: lineStati }))
      .then(() => this.setState({ lineStatusLoaded: true }));
  };

  checkStatus(response) {
    if (response.ok) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }

  parseJSON(response) {
    return response.json();
  }

  render() {
    return (
      <div>
        {this.state.lineStatusLoaded ? (
          <div className="lineStatusContainer">
            <div className="victoria">
              <p>{this.state.lineStatus[0][0].name}</p>
              <p>
                {
                  this.state.lineStatus[0][0].lineStatuses[0]
                    .statusSeverityDescription
                }
              </p>
            </div>
            <div className="northern">
              <p>{this.state.lineStatus[1][0].name}</p>
              <p>
                {
                  this.state.lineStatus[1][0].lineStatuses[0]
                    .statusSeverityDescription
                }
              </p>
            </div>
            <div className="circle">
              <p>{this.state.lineStatus[2][0].name}</p>
              <p>
                {
                  this.state.lineStatus[2][0].lineStatuses[0]
                    .statusSeverityDescription
                }
              </p>
            </div>
            <div className="bakerloo">
              <p>{this.state.lineStatus[3][0].name}</p>
              <p>
                {
                  this.state.lineStatus[3][0].lineStatuses[0]
                    .statusSeverityDescription
                }
              </p>
            </div>
            <div className="Central">
              <p>{this.state.lineStatus[4][0].name}</p>
              <p>
                {
                  this.state.lineStatus[4][0].lineStatuses[0]
                    .statusSeverityDescription
                }
              </p>
            </div>
            <div className="Jubilee">
              <p>{this.state.lineStatus[5][0].name}</p>
              <p>
                {
                  this.state.lineStatus[5][0].lineStatuses[0]
                    .statusSeverityDescription
                }
              </p>
            </div>
            <div className="District">
              <p>{this.state.lineStatus[7][0].name}</p>
              <p>
                {
                  this.state.lineStatus[7][0].lineStatuses[0]
                    .statusSeverityDescription
                }
              </p>
            </div>
            <div className="DLR">
              <p>{this.state.lineStatus[8][0].name}</p>
              <p>
                {
                  this.state.lineStatus[8][0].lineStatuses[0]
                    .statusSeverityDescription
                }
              </p>
            </div>
            <div className="Metropolitan">
              <p>{this.state.lineStatus[9][0].name}</p>
              <p>
                {
                  this.state.lineStatus[9][0].lineStatuses[0]
                    .statusSeverityDescription
                }
              </p>
            </div>
            <div className="Piccadilly">
              <p>{this.state.lineStatus[10][0].name}</p>
              <p>
                {
                  this.state.lineStatus[10][0].lineStatuses[0]
                    .statusSeverityDescription
                }
              </p>
            </div>
          </div>
        ) : (
          <div className="waitingGif">
            <h3>Checking Line Status...</h3>
            <img
              src="https://cdn.dribbble.com/users/200656/screenshots/3266438/london-tube.gif"
              height="400"
              width="400"
              alt="Tube"
            />
          </div>
        )}
      </div>
    );
  }
}

export default LineStatus;
