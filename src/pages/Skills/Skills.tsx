import "./Skills.scss";

import constants from "../../../public/constants.json";

import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiJavascript1,
  DiReact,
  DiAngularSimple,
  DiDart,
  DiJava,
  DiNodejsSmall,
  DiPostgresql,
  DiMongodb,
  DiPython,
  DiGit,
  DiTerminal,
} from "react-icons/di";

import { FaFlutter, FaC } from "react-icons/fa6";
import { SiCplusplus, SiQt, SiExpress } from "react-icons/si";

const iconMap = {
  html5: DiHtml5,
  css3: DiCss3,
  sass: DiSass,
  javascript: DiJavascript1,
  react: DiReact,
  angular: DiAngularSimple,
  dart: DiDart,
  flutter: FaFlutter,
  java: DiJava,
  cplusplus: SiCplusplus,
  qt: SiQt,
  nodejs: DiNodejsSmall,
  express: SiExpress,
  postgresql: DiPostgresql,
  mongodb: DiMongodb,
  python: DiPython,
  c: FaC,
  git: DiGit,
  powershell: DiTerminal,
};

type IconKey = keyof typeof iconMap;

function Skills() {
  return (
    <section id="skills">
      <h2 className="skills-title">Mes compétences</h2>

      <div className="skills-container">
        {constants.skills.groups.map((group) => (
          <div key={group.name} className="skill-group">
            <h3 className="skill-group-title">{group.name}</h3>
            <div className="skill-icons">
              {group.items.map(({ id, label }) => {
                if (!(id in iconMap)) return null;

                const IconComponent = iconMap[id as IconKey];

                return (
                  <div
                    key={id}
                    className="skill-icon"
                    tabIndex={0}
                    aria-label={label}
                    title={label}
                  >
                    <IconComponent />
                    <span className="tooltip">{label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
