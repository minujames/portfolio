import React from "react";
import {Image} from 'react-bootstrap';
import ContactLinks from "../ContactLinks";

import profileImage from "../About/minu.png";


const Contact = () =>
  <section id="contact" className="container contact-section">

    <h3 className="page-heading">GET IN TOUCH</h3>

    <div className="row">
      <div className="col-md-12 contact-content clearfix">
        <div className="contact-image-section"> 
          <Image src={profileImage} circle  className="contact-image" />
          <ContactLinks/>
        </div>
        <div className="contact-description">
          <p> I am available for hire and open to project ideas</p>
          <p>I can help with the following:</p>
          <p>Framework development in JAVA</p>
          <p>Full stack web application development (MERN stack)</p>
          <p>Front-end development with ReactJS</p>
          <p>Send me an email at minu.emilia@gmail.com</p>
        </div>
      </div>
    </div>
  </section>

export default Contact;