import React from "react";
import Projectsjsx from "./components/projects.jsx";

const Projects = ({props}) => {
  
  return(

    
        <body>
                      <h1 className="projectTitle">PROJECTS:</h1>
          <div className="projectsContainer" id="projectsContainer" >
          <div className="item" id="calculator">
          <Projectsjsx
                name={"Js Basic Calculator"}
                git={"https://github.com/oicochea/jscalculator"}
                live={"https://zen-bhaskara-3b249f.netlify.app/"}
                img={"https://i.imgur.com/F1wlROB.png"}
                alt={"JSCalculator"}
                about={"Simple Calculator, that uses Jquery to pass on values.Uses currentTarget to pass the button value and Js conditional statement to  determine to solve for value or add to display array"}
                skills={"JS,Jquery,HTML,CSS"}
      
              />
              </div>
            <div className="item" id="Brewlette">
              <Projectsjsx
                name={"Brewlette"}
                git={"https://github.com/oicochea/Project-1"}
                live={"https://oicochea.github.io/Project-1/"}
                img={"https://i.imgur.com/wQckcRK.png"}
                alt={"brewlette"}
                about={"Application where the user gets to input their zipcode and brewery is ramdonly selected for them. User can use drag and drop feature to 'like or dislike' the brewery. Features also include call button that brings up mobile interface with preloaded number and link to the brewery "}
                skills={"JS,Jquery,HTML,CSS,API,Sticky Nav,Drag and Drop into appendTo"}
              />
            </div>
            <div className="item" id="self-List">
              <Projectsjsx
                name={"Self-List"}
                git={"https://github.com/oicochea/Project-2"}
                live={"https://oscarproject-2.herokuapp.com/"}
                img={"https://i.imgur.com/iZhuzLG.png/img"}
                alt={"self-list"}
                about={"A shoppinglist App that allows you to keep track of what you need to buy, edit, delete, and update the items. This includes priority and images input and link to online purchase system. Can also create a household list and manage different list, shared list display user who added which item"}
                skills={"Mongoose, Express, React, Node.js and EJS,MVC file structure,CRUD,Schema,Heroku,Login/Signup with Auth "}
              />
              </div>
                <div className="item" id="Ubuntu">
              <Projectsjsx
                name={"I am because we are"}
                git={"https://github.com/oicochea/ubuntu-backend"}
                live={"https://practical-jones-b55cd9.netlify.app"}
                img={"https://i.imgur.com/OtF4Qq7.png"}
                alt={"I am becasue we are"}
                about={"Ubuntu is an application that allows users to sign up and log in to thier account to create, view, update, and/or delete community porjects in thier area"}
                skills={"React,Node.js,Milligram,Flexbox,Mongoose,Express,Postman"}
              />
            </div>
            <div className="item" id="garageVision">
              <Projectsjsx
                name={"Garage Vision"}
                git={"https://github.com/oicochea/garage-app-client"}
                live={"https://kind-brattain-53f73d.netlify.app/"}
                img={"https://i.imgur.com/CmS43B4.png"}
                alt={"Garage Vision"}
                about={"A webApp that is a virtual Garage. Allows create user and JWT token auth. User can create vehicles, delete a vehicle and edit a vehicle. Each vehicle has a Make, Model,Year, Miles, Image and Services Section. The this can be editable , the user is recommened to keep adding services and the date so maintain a log of the services the car has recieved"}
                skills={"Rails,JSON, API,One to Many Relationshipm Scaffold, CRUD, MOdels, Schema, Heroku, Netlify"}
              />
            </div>
          </div>
          
        </body>
    );
  }

export default Projects;
