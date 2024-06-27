import React from "react";
import { Link } from "react-router-dom";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import TimeLineElement from "../../components/TimelineElement/TimelineElement.jsx";
import { TimelineElementType } from "../../components/TimelineElement/TimelineElement.jsx";
import "./Experiences.scss";

class Experience extends React.Component {
  render() {
    return (
      <div className="experience">
        <VerticalTimeline>
          <TimeLineElement
            title="Apprenti Développeur Logiciel"
            society="Thales Group, 38430 Moirans"
            date="Depuis Août 2023"
            type={TimelineElementType.WORK}
            description={`
              Maintenance d'une application existante (C et C++),
              création d'applications graphiques et de modules (Python),
              scripts d'automatisation Excel (VBA). Apprentissage dans le cadre de la 3ème année du BUT Informatique.
            `}
          />

          <TimeLineElement
            title="Stage Développeur informatique"
            society="GipsaLAB, 38400 Saint-Martin-d'Hères"
            date="Avril 2023 - Juillet 2023"
            type={TimelineElementType.WORK}
            description={`
              Développement d'une application permettant le suivi d'un protocol expérimental (Mathlab, Psychtoolbox).
              Stage dans le cadre de la 2ème année du BUT Informatique
            `}
          />

          <TimeLineElement
            title="BUT Informatique"
            society="IUT2 de Grenoble - UGA"
            date="Depuis septembre 2021"
            type={TimelineElementType.EDUCATION}
            link="https://formations.univ-grenoble-alpes.fr/fr/catalogue-2021/but-bachelor-universitaire-de-technologie-CBB/but-informatique-grenoble-KI4UEV4Y.html"
            description={`
              Préparation du diplôme de Bachelor Universitaire de Technologie en Informatique, parcours A (spécialité Développement)
            `}
          />
        </VerticalTimeline>
      </div>
    );
  }
}

export default Experience;
