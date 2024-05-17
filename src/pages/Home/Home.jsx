import React from "react";
import './Home.scss'
import profilePic from "../../../public/profilePic.png";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="infos">
          <h1>Sébastien RUET</h1>
          <h3>Développeur web et logiciel</h3>
          <div className="home-buttons">
            <Link to="https://cvdesignr.com/p/6358f70dbc1fd">
              <button className="cv-link">
                <span>
                  CV
                </span>
              </button>
            </Link>
          </div>
        </div>
        <img className="profile-pic" src={profilePic}></img>
      </div>
    )
  }
}

export default Home;
