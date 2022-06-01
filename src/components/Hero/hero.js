import React from "react";
import "./hero.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNpm,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
export default function hero() {
  return (
    <header>
      <h1>
        Hi, I'm Ronald McdDona!!!! <br />
        <span> Full Stack Software Developer</span>
      </h1>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJsSquare} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faGitAlt} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faNpm} color="#EC4D28" />
          </div>
        </div>
      </div>
    </header>
  );
}
