import React from "react";
import "./Project.css";
import Line from "../../images/line-purple.svg";
import ImageTemp from "../../images/prev-project-temp.png";
import FigmaIcon from "../../images/figma-icon.svg";
import ReactIcon from "../../images/react-svg.svg";
import JavascriptIcom from "../../images/js-svg.svg";
import PlaylisterImg from "../../images/playlister-img.png";
import D3Icon from "../../images/d3.svg";

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
            MERN stack application for Stony Brook University's students to share, publish, like, comment and play music playlists.
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
            <span className="text-react">React</span> with components from Material UI. Backend in Express & MongoDB. 
          </p>
          <div className="details-stack">
            <span className="white-text">Technologies:</span>
            <ul className="gray-text">
              <li>ReactJS</li>
              <li>MongoDB</li>
              <li>Express</li>
              <li>Node.js</li>
              <li>Material UI</li>
              <li>Postman</li>
            </ul>
          </div>
          
        </div>
      </div>

      <div className="project-header">
        <div className="project-box">
          <span className="white-text">nyc demographic & water quality data visualization</span>
          <p className="gray-text text-box">
            Interactive, data visualization dashboard web application, visualizing New York City demographic and water quality data.
          </p>
        </div>
        <img className="project-line" src={Line} alt="abajo" />
      </div>

      <div className="project-details">
        {/* <img src={PlaylisterImg} alt="Project React Simple Portfolio" /> */}
        <div className="details-left">
          <p className="gray-text">
            Developed with 
            <img className="icon-figma" src={JavascriptIcom} alt="" /> 
            <span className="text-react">Javascript</span> using the <img className="icon-figma" src={D3Icon} alt="" /> <span className="text-react">D3.js</span> data visualization library
          </p>
          <div className="details-stack">
            <span className="white-text">Technologies:</span>
            <ul className="gray-text">
              <li>HTML</li>
              <li>Google Web Server</li>
              <li>Javascript</li>
              <li>D3.js</li>
              <li>Python</li>
            </ul>
          </div>
          
        </div>
      </div>

      <div className="project-header">
        <div className="project-box">
          <span className="white-text">NRHH web ui design & dev</span>
          <p className="gray-text text-box">
            Interactive, UI based design project for the National Residence Hall Honorary, a student organization at Stony Brook University. Logos, animations, and web app UI designs were developed. Sample rich web app developed.
          </p>
        </div>
        <img className="project-line" src={Line} alt="abajo" />
      </div>

      <div className="project-details">
        {/* <img src={PlaylisterImg} alt="Project React Simple Portfolio" /> */}
        <div className="details-left">
          <p className="gray-text">
            Developed with 
            <img className="icon-figma" src={FigmaIcon} alt="" />
            <span className="text-figma">Figma</span> and 
            <img className="icon-figma" src={JavascriptIcom} alt="" /> 
            <span className="text-react">Javascript</span> using Google Web Designer.
          </p>
          <div className="details-stack">
            <span className="white-text">Technologies:</span>
            <ul className="gray-text">
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Figma</li>
              <li>Google Web Designer</li>
              <li>HTML & CSS</li>
              <li>Javascript</li>
            </ul>
          </div>
          
        </div>
      </div>

      

      <div className="project-header">
        <div className="project-box">
          <span className="white-text">transparent transit</span>
          <p className="gray-text text-box">
            Mobile app HCI design project for improving accessibility of public transit infrastructure for visually disabled individuals. Mockups were designed, and sample HCI testing methodolies were developed. 
          </p>
        </div>
        <img className="project-line" src={Line} alt="abajo" />
      </div>

      <div className="project-details">
        <div className="details-left">
          <p className="gray-text">
             Developed with 
            <img className="icon-figma" src={FigmaIcon} alt="" />
            <span className="text-figma">Figma</span> with HCI testing in R & Python.
          </p>
          <div className="details-stack">
            <span className="white-text">Technologies:</span>
            <ul className="gray-text">
              <li>Figma</li>
              <li>R</li>
              <li>Python</li>
            </ul>
          </div>
          {/* <p className="gray-text">
            Una estrellita en <span className="white-text">Github</span> y mira
            en vivo la <span className="white-text">Web</span>{" "}
          </p> */}
        </div>
      </div>

    </section>
  );
}

export default Project;
