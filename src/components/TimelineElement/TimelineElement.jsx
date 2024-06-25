import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "../icons/WorkIcon.jsx";
import SchoolIcon from "../icons/SchoolIcon.jsx";
import "./TimelineElement.scss";

const TimelineElementType = {
  WORK: "Work",
  EDUCATION: "Education",
};

class TimelineElement extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { title, society, date, type, description } = this.props;

    return (
      <VerticalTimelineElement
        contentStyle={{ background: "hsla(0,0%,100%,.14)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date={date}
        iconStyle={{ background: "#484848", color: "#fff" }}
        icon={
          type === TimelineElementType.EDUCATION ? <SchoolIcon /> : <WorkIcon />
        }
      >
        <h3 className="vertical-timeline-element-title">{title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{society}</h4>

        <p>{description}</p>
      </VerticalTimelineElement>
    );
  }
}

export default TimelineElement;
export { TimelineElementType };
