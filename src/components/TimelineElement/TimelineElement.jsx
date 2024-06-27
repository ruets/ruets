import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import GoogleFontsIcon from "../GoogleFontsIcon/GoogleFontsIcon";
import "./TimelineElement.scss";

const TimelineElementType = {
  WORK: "work",
  EDUCATION: "school",
};

class TimelineElement extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { title, society, date, type, link, description } = this.props;

    return (
      <VerticalTimelineElement
        className={link ? "linked" : ""}
        contentStyle={{ background: "hsla(0,0%,100%,.14)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date={date}
        iconStyle={{ background: "#484848", color: "#fff" }}
        icon={<GoogleFontsIcon iconName={type} />}
      >
        <h3 className="vertical-timeline-element-title">{title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{society}</h4>

        <p>{description}</p>

        {link && (
          <a href={link} target="_blank" rel="noreferrer">
            <div className="link-corner">
              <GoogleFontsIcon iconName="link" />
            </div>
          </a>
        )}
      </VerticalTimelineElement>
    );
  }
}

export default TimelineElement;
export { TimelineElementType };
