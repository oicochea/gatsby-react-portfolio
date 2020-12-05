import React from "react";
import Projectsjsx from "./components/projects";


class Projects extends React.Component {
  render() {
    return (
      <>
        <body>
          <div className="projectsContainer" id="projectsContainer" >
            <div className="item">
              <Projectsjsx
                name={"Brewlette"}
                git={"https://github.com/oicochea/Project-1"}
                live={"https://oicochea.github.io/Project-1/"}
                img={"https://i.imgur.com/wQckcRK.png"}
                alt={"brewlette"}
              />
            </div>
            <div className="item">
              <Projectsjsx
                name={"Self-List"}
                git={"https://github.com/oicochea/Project-2"}
                live={"https://oscarproject-2.herokuapp.com/"}
                img={"https://i.imgur.com/iZhuzLG.png[/img"}
                alt={"self-list"}
              />
            </div>
          </div>
        </body>
      </>
    );
  }
}

export default Projects;
