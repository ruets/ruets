import "./Experiences.scss";
import constants from "../../../public/constants.json";

import TimeLineElement from "../../components/TimelineElement/TimelineElement";

import "react-vertical-timeline-component/style.min.css";
import { VerticalTimeline } from "react-vertical-timeline-component";

function Experiences() {
  return (
    <section id="experiences">
      <h2 className="experiences-title">Mes expériences</h2>

      <span className="today-date">
        {/* {new Date().toLocaleDateString("fr-FR", { */}
        {/*   year: "numeric", */}
        {/*   month: "long", */}
        {/*   day: "numeric", */}
        {/* })} */}
        AUJOURD'HUI
      </span>

      <VerticalTimeline>
        {constants.experiences.list.map((element, index) => {
          return (
            <TimeLineElement
              key={index}
              title={element.title}
              subtitle={element.subtitle}
              date={element.date}
              elementType={element.type}
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
