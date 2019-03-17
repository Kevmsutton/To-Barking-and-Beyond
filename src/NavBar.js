import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <h3>JOURNEYMAPPER</h3>
        <ul className="">
          <li className="">
            <Link
              onClick={() => this.props.isLoadedToFalsey()}
              className="navigation-link navigation-brand"
              to="/"
            >
              Plan a Journey
            </Link>
            <li className="">
              <Link
                onClick={() => this.props.isLoadedToFalsey()}
                className="navigation-link"
                to="/SavedJourneys"
              >
                Saved Journeys
              </Link>
            </li>
            <li className="">
              <Link
                onClick={() => this.props.isLoadedToFalsey()}
                className="navigation-link"
                to="/maps"
              >
                Maps
              </Link>
            </li>
          </li>
          <li className="">
            <Link
              onClick={() => this.props.isLoadedToFalsey()}
              className="navigation-link"
              to="/signup"
            >
              {" "}
              SignUp
            </Link>
          </li>
          <li className="">
            <Link
              onClick={() => this.props.isLoadedToFalsey()}
              className="navigation-link"
              to="/login"
            >
              Login
            </Link>
          </li>
          <li className="">
            <a
              className="navigation-link"
              href="https://github.com/Kevmsutton/TravelPlanner"
            >
              {" "}
              Github
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
