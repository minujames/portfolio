import React, { Component } from "react";
import {Navbar, Nav, NavItem} from 'react-bootstrap';

import Scroll from 'react-scroll';

const Link = Scroll.Link;

class Header extends Component {

  state = {
    navExpanded: false
  }

  setNavExpanded = navExpanded => {
    this.setState({ navExpanded });
  }

  closeNavBar = () => {
    this.setState({ navExpanded: false });
  }

  render() {
    return (
      <Navbar fixedTop
      onToggle={this.setNavExpanded}
      expanded={this.state.navExpanded}>
        <Navbar.Header>
          <Navbar.Brand>
            <span className="header-link" >MINU JAMES</span>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              <Link className="header-link" activeClass="active-link" onClick={this.closeNavBar} to="about" spy={true} smooth={true} duration={500}>ABOUT</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link className="header-link" activeClass="active-link" onClick={this.closeNavBar} to="portfolio" spy={true} smooth={true} duration={500}>PORTFOLIO</Link>
            </NavItem>
            <NavItem eventKey={3} href="#">
              <Link className="header-link" activeClass="active-link" onClick={this.closeNavBar} to="contact" spy={true} smooth={true} duration={500}>CONTACT</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;