import React, { Component } from "react";
import {Image, Table} from 'react-bootstrap';
import {Circle} from 'rc-progress';


const About = () =>
  <section id="about" className="about-section">

    <div className="row about-image-section">
      <div className="col-md-12" style={{textAlign: "center", padding: "10%"}}>
        <h1 className="title">FULL STACK DEVELOPER</h1>
      </div>
    </div>

    <div className="container">
      <div className=" row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="about-tab clearfix">
            <Image src="/assets/images/minu.png" className=" profile-image" circle/>
            <div className="about-text">
              <p>Hi, I am an Oracle certified Java developer with six years of experience in the design and development of Java and JavaScript applications.
              I love solving problems and coming up with innovative solutions.
              Over the years I have developed the skills to deliver well crafted and maintainable code.</p>
              <p>Primary Skills: JAVA, JavaScript, React</p>
              <p>Other Skills: Node.js, JQuery, Express, HTML, CSS, BootStrap, Handlebars, MySQL, MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

export default About;