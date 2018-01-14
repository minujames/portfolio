import React from 'react';
import {Image} from 'react-bootstrap';

const Project = (props) =>
  <div className="project">
    <div className="row">
      <div className="col-md-6 col-sm-12 project-image-section">
        <Image responsive src={props.imageUrl} alt={props.title} className="project-image"/>
      </div>
      <div className="col-md-6 col-sm-12 project-details-section">
        <a href={props.deployedUrl} target="_blank">
          <h3 className="project-title">{props.title}</h3>
        </a>      

        <div className="project-description">
          {props.description}
        </div>

        <br/>

        <div className="project-techstack">
          {props.techStack}
        </div>

        <br/>

        <div className="project-git">
          <a target="_blank" href={props.githubUrl}>View On GitHub</a>
        </div>
      </div>
    </div>
  </div>

export default Project;