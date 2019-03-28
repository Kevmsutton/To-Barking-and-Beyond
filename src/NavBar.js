import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class NavBar extends React.Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    const { username, signOut } = this.props;
    return (
      <div>
        <Navbar
          style={{ backgroundColor: "#3C4749" }}
          color="inverse"
          dark
          expand="md"
        >
          <NavbarBrand className="navText" href="/">
            ToBarkingAndBeyond
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="" navbar>
              <NavItem className="">
                <NavLink
                  className="navText"
                  onClick={() => this.props.isLoadedToFalsey()}
                  href="/"
                >
                  Plan A Journey
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="navText"
                  onClick={() => this.props.isLoadedToFalsey()}
                  href="/linestatus"
                >
                  Line Status
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="navText"
                  onClick={() => this.props.isLoadedToFalsey()}
                  href="/SavedJourneys"
                >
                  My Journeys
                </NavLink>
              </NavItem>
              <NavItem className="navText">
                <NavLink
                  className="navText"
                  href="https://traintimes.org.uk/map/tube/schematic/"
                  target="_blank"
                >
                  Watch Tubes Fly
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              {!username ? (
                <NavItem>
                  <NavLink className="navText" href="/Login/">
                    Login
                  </NavLink>
                </NavItem>
              ) : (
                <NavItem>
                  <NavLink className="navText" onClick={() => signOut()}>
                    Logout
                  </NavLink>
                </NavItem>
              )}
              <NavItem>
                <NavLink className="navText" href="/Signup/">
                  Signup
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="navbar" />
      </div>
    );
  }
}

export default NavBar;
