import "./TimelineElement.scss";

import Icon from "../Icon/Icon";

import "react-vertical-timeline-component/style.min.css";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

interface TimelineElementProps {
  title: string;
  subtitle: string;
  date: string;
  elementType: string;
  link?: string;
  description: string;
}

function TimelineElement({
  title,
  subtitle,
  date,
  elementType,
  link,
  description,
}: TimelineElementProps) {
  return (
    <VerticalTimelineElement
      className={link ? "linked" : ""}
      contentStyle={{ background: "hsla(0,0%,100%,.14)", color: "#fff" }}
      date={date}
      iconStyle={{ background: "#484848", color: "#fff" }}
      icon={<Icon name={elementType} />}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>

      <p>{description}</p>

      {link && (
        <a
          className="vertical-timeline-element-link"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <Icon name="externallink" />
          </div>
        </a>
      )}
    </VerticalTimelineElement>
  );
}

export default TimelineElement;
