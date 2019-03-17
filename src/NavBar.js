import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
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
    return (
      <div>
        <Navbar color="inverse" light expand="md">
          <NavbarBrand href="/">JourneyPlanner</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="" navbar>
              <NavItem className="">
                <NavLink
                  className=""
                  onClick={() => this.props.isLoadedToFalsey()}
                  href="/"
                >
                  Plan A Journey
                </NavLink>
              </NavItem>
              <NavItem className="">
                <NavLink
                  className=""
                  onClick={() => this.props.isLoadedToFalsey()}
                  href="/SavedJourneys"
                >
                  Saved Journeys
                </NavLink>
              </NavItem>
              <NavItem className="">
                <NavLink
                  className=""
                  onClick={() => this.props.isLoadedToFalsey()}
                  href="/maps"
                >
                  Maps
                </NavLink>
              </NavItem>
              <NavItem className="">
                <NavLink
                  className=""
                  onClick={() => this.props.isLoadedToFalsey()}
                  href="/somethingelse"
                >
                  SomethingElse
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/Login/">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Signup/">Signup</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Jumbotron>
          <Container>
            <Row>
              <Col />
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default NavBar;
