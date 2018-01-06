import React, { Component } from "react";
import {Navbar, Nav, NavItem} from 'react-bootstrap';

import Scroll from 'react-scroll';

const Link = Scroll.Link;

class Header extends Component {
  render() {
    return (
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Minu James</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            <li eventKey={1} href="#">
              <Link className="" activeClass="" to="about" spy={true} smooth={true} duration={500}>About</Link>
            </li>
            <li eventKey={2} href="#">
              <Link className="" activeClass="" to="portfolio" spy={true} smooth={true} duration={500}>Portfolio</Link>
            </li>
            <li eventKey={3} href="#">
              <Link className="" activeClass="" to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;