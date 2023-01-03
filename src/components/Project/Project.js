import React from "react";
import "./Project.css";
import Line from "../../images/line-purple.svg";
import ImageTemp from "../../images/prev-project-temp.png";
import FigmaIcon from "../../images/figma-icon.svg";
import ReactIcon from "../../images/react-svg.svg";
import PlaylisterImg from "../../images/playlister-img.png";

function Project() {
  return (
    <section id="projects" className="container container-project">
      <p className="purple-text">
        ‍💻🧑🏽‍💻{" "}Projects - 
        <span className="purple-smoke-text"> just some things I've worked on during my time at Stony Brook University </span>{" "}
      </p>

      <div className="project-header">
        <div className="project-box">
          <span className="white-text">the playlister</span>
          <p className="gray-text text-box">
            MERN stack application for Stony Brook University's students to share, publish, like, comment and play music playlists. Developed as part of CSE 316 – Software Design & Engineering
          </p>
        </div>
        <img className="project-line" src={Line} alt="abajo" />
      </div>

      <div className="project-details">
        {/* <img src={PlaylisterImg} alt="Project React Simple Portfolio" /> */}
        <div className="details-left">
          <p className="gray-text">
            Developed with 
            <img className="icon-figma" src={ReactIcon} alt="" />
            <span className="text-react">React</span> and view on <span className="text-react">Github</span>
          </p>
          <div className="details-stack">
            <span className="white-text">Technologies:</span>
            <ul className="gray-text">
              <li>ReactJS</li>
              <li>MongoDB</li>
              <li>Express</li>
              <li>Node.js</li>
              <li>Postman</li>
            </ul>
          </div>
          
        </div>
      </div>

      <div className="project-header">
        <div className="project-box">
          <span className="white-text">the playlister</span>
          <p className="gray-text text-box">
            MERN stack application for Stony Brook University's students to share, publish, like, comment and play music playlists. Developed as part of CSE 316 – Software Design & Engineering
          </p>
        </div>
        <img className="project-line" src={Line} alt="abajo" />
      </div>

      <div className="project-details">
        {/* <img src={PlaylisterImg} alt="Project React Simple Portfolio" /> */}
        <div className="details-left">
          <p className="gray-text">
            Developed with 
            <img className="icon-figma" src={ReactIcon} alt="" />
            <span className="text-react">React</span> and view on <span className="text-react">Github</span>
          </p>
          <div className="details-stack">
            <span className="white-text">Technologies:</span>
            <ul className="gray-text">
              <li>ReactJS</li>
              <li>MongoDB</li>
              <li>Express</li>
              <li>Node.js</li>
              <li>Postman</li>
            </ul>
          </div>
          
        </div>
      </div>

      

      <div className="project-header">
        <div className="project-box">
          <span className="white-text">react-dark-portfolio</span>
          <p className="gray-text text-box">
            Templete para que muestres tus proyectos como un portafolio usando
            reactjs
          </p>
        </div>
        <img className="project-line" src={Line} alt="abajo" />
      </div>

      <div className="project-details">
        <img src={ImageTemp} alt="Project React Simple Portfolio" />
        <div className="details-left">
          <p className="gray-text">
            Mira el diseño de este proyecto en
            <img className="icon-figma" src={FigmaIcon} alt="" />
            <span className="text-figma">Figma</span>
          </p>
          <div className="details-stack">
            <span className="white-text">Tecnologias</span>
            <ul className="gray-text">
              <li>Reactjs</li>
              <li>CMS (Contenful)</li>
              <li>Nodejs</li>
            </ul>
          </div>
          <p className="gray-text">
            Una estrellita en <span className="white-text">Github</span> y mira
            en vivo la <span className="white-text">Web</span>{" "}
          </p>
        </div>
      </div>

    </section>
  );
}

export default Project;
