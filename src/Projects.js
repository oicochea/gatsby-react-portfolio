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
                about={"Application where the user gets to input their zipcode and brewery is ramdonly selected for them. User can use drag and drop feature to 'like or dislike' the brewery. Features also include call button that brings up mobile interface with preloaded number and link to the brewey "}
                skills={"JS,Jquery,HTML,CSS,API"}
              />
            </div>
            <div className="item" id="self-List">
              <Projectsjsx
                name={"Self-List"}
                git={"https://github.com/oicochea/Project-2"}
                live={"https://oscarproject-2.herokuapp.com/"}
                img={"https://i.imgur.com/iZhuzLG.png/img"}
                alt={"self-list"}
              />
              </div>
                <div className="item" id="Ubuntu">
              <Projectsjsx
                name={"I am because we are"}
                git={"https://github.com/oicochea/ubuntu-backend"}
                live={"https://practical-jones-b55cd9.netlify.app"}
                img={"https://i.imgur.com/OtF4Qq7.png"}
                alt={"I am becasue we are"}
              />
            </div>
            <div className="item" id="garageVision">
              <Projectsjsx
                name={"Garage Vision"}
                git={"https://github.com/oicochea/garage-app-client"}
                live={"https://kind-brattain-53f73d.netlify.app/"}
                img={"https://i.imgur.com/CmS43B4.png"}
                alt={"Garage Vision"}
              />
            </div>
          </div>
          
        </body>
    );
  }

export default Projects;
