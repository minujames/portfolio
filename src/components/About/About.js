import React, { Component } from "react";
import {Image, Table} from 'react-bootstrap';


const About = () =>
  <section id="about" className="main-section about-section">
    
    <div className="about-content" >
      <Image src="/assets/images/minu.png" circle style={{width: 200, height: 200}} />
      <h3>Full Stack Developer</h3>
      <p>
        Six years of experience in design and development of web applications.
        <br/> 
        A dedicated problem-solver with a strong background in object-oriented programming.
        <br/>
        Highly versatile and receptive Software Engineer with a proven ability to build innovative software solutions.
        <br/>
        Experience in Agile software development model.
      </p>
    </div>
  </section>

export default About;