import React from 'react';
import {Image} from 'react-bootstrap';

const Project = (props) =>
  <div className="project">
    <div>
      <section className="project-image-section">
        <Image responsive src={props.imageUrl} alt={props.title} className="project-image"/>
      </section>

      <section className="project-details-section">
      <a href={props.deployedUrl} target="_blank"><h3>{props.title}</h3></a>      

       <div>
          {props.description}
        </div>

        <br/>

        <div>
          {props.techStack}
        </div>

        <br/>

        <div>
          <a target="_blank" href={props.githubUrl}>View On GitHub</a>
        </div>
      </section>
    </div>
    

  </div>

export default Project;