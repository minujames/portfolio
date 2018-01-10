import React, { Component } from "react";
import Project from "../Project"

const Portfolio = () =>
  <section id="portfolio" className="container main-section portfolio-section">
    <h2>Portfolio</h2>
    
    <div className="row project-row">
      <div className="col-md-6 col-sm-12 equal">
        <Project 
        title="Cali.cool"
        imageUrl="/assets/images/mod/cali-cool-mac.png" 
        description="A photo sharing app for sharing the California experience. The collection of photographs is open for public viewing, but requires a user login to share photos, as well as to like and comment on photos and albums."
        githubUrl="https://github.com/dbmarshall/cali-cool.git"
        deployedUrl="http://cali.cool"
        techStack="MongoDB, Express, React & Node"/>
      </div>
      <div className="col-md-6 col-sm-12 equal">
        <Project 
        title="Theatre Management"
        imageUrl="/assets/images/mod/theatre-mngmnt-mac.png" 
        description="An application that enables theatre owners to add and schedule movie shows. It also allows the users to view movie schedules and reserve tickets. This App uses OMDb API to get movie info."
        githubUrl="https://github.com/minujames/theatre-management.git"
        deployedUrl="https://still-hollows-97437.herokuapp.com/"
        techStack="Node, Express, JQuery, Handlebars, Bootstrap, MySql & Sequelize"/>
      </div>
    </div>

    
    <div className="row project-row">
      <div className="col-md-6 col-sm-12">
        <Project 
        title="The Culinary Checklist"
        imageUrl="/assets/images/mod/culinary-checklist_mac.png" 
        description="An application to search for and save recipes based on a User’s dish of choice by utilizing the  Spoonacular API. It generates a combined grocery list of all the selected recipes and allows users to save it for future use."
        githubUrl="https://github.com/Brainstorm-Chaser/The-Culinary-Checklist.git"
        deployedUrl="http://minujames.com/The-Culinary-Checklist/"
        techStack="AJAX, Spoonacular API, JQuery, Bootstrap, HTML, CSS & Firebase"/>
      </div>
      <div className="col-md-6 col-sm-12">
        <Project 
        title="Hangman game"
        imageUrl="/assets/images/mod/hangman_mac.png" 
        description="A JavaScript hangman game in Animal Safari theme for little kids. Animal names are the words to guess, for a correct guess the animal image is displayed with a clapping sound."
        githubUrl="https://github.com/minujames/hangman-game.git"
        deployedUrl="http://minujames.com/hangman-game/"
        techStack="JavaScript, HTML, Bootstrap & CSS"/>
      </div>
    </div>

    {
    //   <div className="row project-row">
    //   <div className="col-md-6 col-sm-12">
    //     <Project 
    //     title="RPS multiplayer game"
    //     imageUrl="/assets/images/mod/RPS-multiplayer_mac.png" 
    //     description="A Rock Paper Scissors multiplayer game. Only two players can play the game at a time, and all the other users will get a wait message. When either player leaves the game, the slot will be opened for other players."
    //     githubUrl="https://github.com/minujames/RPS-Multiplayer.git"
    //     deployedUrl="http://minujames.com/RPS-Multiplayer/"
    //     techStack="JQuery, Bootstrap, Firebase, HTML & CSS"/>
    //   </div>
    //   <div className="col-md-6 col-sm-12">
        
    //   </div>
    // </div>
  }

  </section>

export default Portfolio;