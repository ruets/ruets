import "./Home.scss";
import constants from "../../../public/constants.json";
import profilePic from "../../../public/profilePic.png";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

import Icon from "../../components/Icon/Icon";

const options = {
  strings: constants.home.typed,
  typeSpeed: 50,
  startDelay: 500,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
};

function Home() {
  const typedElementRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElementRef.current, options);

    return () => typed.destroy();
  }, [typedElementRef]);

  return (
    <section id="home">
      <div className="infos">
        <h1>Sébastien RUET</h1>

        <div className="typed">
          <span className="typed-text" ref={typedElementRef} />
        </div>

        <div className="socials">
          {constants.home.socials.map(({ name, url }) => (
            <a className="socials-link" href={url} key={name} target="_blank">
              <Icon name={name} />
            </a>
          ))}
        </div>

        <div className="home-buttons">
          <a href="https://cvdesignr.com/p/ruets" target="_blank">
            <button className="cv-link">
              <Icon name="resume" />
              <span>CV</span>
            </button>
          </a>
        </div>
      </div>

      <img className="profile-pic" src={profilePic}></img>
    </section>
  );
}

export default Home;
