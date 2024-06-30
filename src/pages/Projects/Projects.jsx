import React from "react";
import { Link } from "react-router-dom";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import TimeLineElement from "../../components/TimelineElement/TimelineElement.jsx";
import { TimelineElementType } from "../../components/TimelineElement/TimelineElement.jsx";
import projects from "../../../public/lists/projects.json";
import "./Projects.scss";

class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <VerticalTimeline>
          {projects.map((element, index) => {
            return (
              <TimeLineElement
                key={index}
                title={element.title}
                subtitle={element.subtitle}
                date={element.date}
                type={TimelineElementType[element.type]}
                description={element.description}
                link={element.link}
              />
            );
          })}
        </VerticalTimeline>
      </div>
    );
  }
}

export default Projects;
