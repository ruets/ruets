import "./Navbar.scss";

import { useState } from "react";

import Icon from "../Icon/Icon";

// inspired by :
// - https://uiverse.io/vinodjangid07/soft-octopus-29
// - https://www.shubhporwal.me/
function Navbar() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="navbar">
      <div className="header">
        <div className="logo">
          <a href="#">
            <span>ruets.</span>
          </a>
        </div>

        <div className="navbar-toggle">
          <input
            type="checkbox"
            id="checkbox"
            checked={isChecked}
            onChange={toggleCheckbox}
          />
          <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1" />
            <div className="bars" id="bar2" />
            <div className="bars" id="bar3" />
          </label>
        </div>
      </div>

      <nav className={isChecked ? "nav-active" : ""} onClick={toggleCheckbox}>
        <ul>
          <li onClick={(e) => e.stopPropagation()}>
            <a href="#home">
              <Icon name="home" />
              <span>Accueil</span>
            </a>
          </li>
          <li onClick={(e) => e.stopPropagation()}>
            <a href="#about">
              <Icon name="about" />
              <span>A propos</span>
            </a>
          </li>
          <li onClick={(e) => e.stopPropagation()}>
            <a href="#experiences">
              <Icon name="work" />
              <span>Expériences</span>
            </a>
          </li>
          <li onClick={(e) => e.stopPropagation()}>
            <a href="#projects">
              <Icon name="code" />
              <span>Projets</span>
            </a>
          </li>
          <li onClick={(e) => e.stopPropagation()}>
            <a href="#skills">
              <Icon name="school" />
              <span>Compétences</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
