import React from "react";
import {Image} from 'react-bootstrap';
import ContactLinks from "../ContactLinks";
import profileImage from "./minu.png";

const About = () =>
  <section id="about" className="about-section">

    <div className="row about-image-section">
      <div className="col-md-12">
        <h1 className="title">FULL STACK DEVELOPER</h1>
      </div>
    </div>

    <div className="container">
      <div className=" row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="about-tab clearfix">
            <div className="profile-image-wrapper">
              <Image src={profileImage} className="profile-image" circle responsive/>
            </div>
            <div className="about-text">
              <p>Hi, I am an Oracle certified Java developer with six years of experience in the design and development of Java and JavaScript applications.
              I love solving problems and coming up with innovative solutions.
              </p>
              <br/>
              <p>Primary Skills: JAVA, JavaScript, React</p>
              <p>Other Skills: Node.js, JQuery, Express, HTML, CSS, BootStrap, Handlebars, MySQL, MongoDB</p>
            </div>
            <ContactLinks/>
          </div>
        </div>
      </div>
    </div>
  </section>

export default About;