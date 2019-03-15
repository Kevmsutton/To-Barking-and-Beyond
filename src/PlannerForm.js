import React from "react";

class PlannerForm extends React.Component {
  state = {
    to: "",
    from: ""
  };

  handleToChange = event => {
    this.setState({ to: event.target.value });
  };

  handleFromChange = event => {
    this.setState({ from: event.target.value });
  };

  handleFormSubmit = event => {
    this.props.getFirstStationId(this.state.to, this.state.from);
    event.preventDefault();
  };

  render() {
    console.log(this.props);
    return (
      <div className="bg-dark-red dib br3 pa3 ma2">
        <h3>Plan Your Journey</h3>
        <form>
          <input
            type="text"
            name="to"
            placeholder="To..."
            value={this.state.to}
            onChange={this.handleToChange}
          />
          <br />
          <br />
          <input
            type="text"
            name="from"
            placeholder="From..."
            value={this.state.from}
            onChange={this.handleFromChange}
          />
          <br />
          <br />
          <button onClick={event => this.handleFormSubmit(event)}>Now</button>
        </form>
      </div>
    );
  }
}

export default PlannerForm;
