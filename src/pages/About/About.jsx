import React from "react";
import './About.scss'
import profilePic from "../../../public/profilePic.png";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="presentation-text">
          <h1>A propos de moi</h1>
          <p>
            Je m&apos;appelle Sébastien RUET et je suis un jeune étudiant en 3<sup>ème</sup> année de BUT Informatique à l&apos;IUT2 de l&apos;Université Grenoble Alpes.
            Je suis actuellement en alternance à Thales AVS, où je travaille en tant qu&apos;apprenti développeur.<br /><br />
            Au cours de mes années d&apos;études et de mes expériences professionnelles, j&apos;ai pu travailler en autonomie et développer mes compétences techniques, mais également travailler en équipe et développer d&apos;autres compétences (communication, organisation, adaptation du discours en fonction de l&apos;interlocuteur, etc.).<br /><br />
            Ma curiosité pour l&apos;informatique et le développement m&apos;a poussé à apprendre toujours plus de nouvelles technologies, et je continue de me former/perferctionner en autodidacte sur de nombreux sujets.<br /><br />
            Je possède le permis B et je prévois de passer le permis moto prochainement.<br />
            Je suis passionné par la musique, la photo/vidéo et le sport. Parmi mes autres centres d&apos;intêret, on peut citer notamment les jeux vidéos, les séries/animés et la lecture.
          </p>
        </div>
        <img className="profile-pic" src={profilePic}></img>
      </div>
    )
  }
}

export default Home;
