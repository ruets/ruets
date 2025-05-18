import "./Experiences.scss";
import constants from "../../../public/constants.json";

import TimeLineElement, {
  TimelineElementType,
} from "../../components/TimelineElement/TimelineElement";

import "react-vertical-timeline-component/style.min.css";
import { VerticalTimeline } from "react-vertical-timeline-component";

function Experiences() {
  return (
    <section id="experiences">
      <h2 className="experiences-title">Mes expériences</h2>

      <VerticalTimeline>
        {constants.experiences.list.map((element, index) => {
          // On pr�cise � TS que element.type est bien une cl� de TimelineElementType
          const typeKey = element.type as keyof typeof TimelineElementType;

          return (
            <TimeLineElement
              key={index}
              title={element.title}
              subtitle={element.subtitle}
              date={element.date}
              elementType={TimelineElementType[typeKey]}
              description={element.description}
              link={element.link}
            />
          );
        })}
      </VerticalTimeline>
    </section>
  );
}

export default Experiences;
