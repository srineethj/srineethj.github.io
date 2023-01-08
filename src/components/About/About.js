import "./About.css";
import "../Mode/Mode.css"
import iconImage from "../../images/logo.png";

export const About = () => {
  return (
    <section id="about" className="container container-about">
      <div className="about-right">
        <img src={iconImage} alt="" />
      </div>
      <div className="about-left">
      <span className="white-text">
          Welcome to my Portfolio :) 
        </span>
        {/* <span className="purple-text">
          <span className="purple-smoke-text">Introduction 😇</span>{" "}
        </span> */}
        <p className="gray-text">
          Hello! I'm an undergraduate computer science (CSE) student at <a href="https://stonybrook.edu"><span className="text-sbu"> Stony Brook University </span></a> in the Greater New York City Area. I am currently specializing in Human Computer Interaction, minoring in biology, and I'm interested in the intersection of computer science and medicine. I'm increasing the accessibility of software and designing human centered products. At school, I'm the President of the National Residence Hall Honorary, a service and leadership oriented student organization. I am currently looking for opportunities for Summer 2023 – please feel free to email me at <a href="mailto:svjayanthi@cs.stonybrook.edu"> <span class="link-decoration"><span className="white-text">svjayanthi@cs.stonybrook.edu</span></span></a>{"."}
        </p>
        <p>
          
        </p>
        <span className="purple-text">I've worked with:</span>
        <ul className="tech-stack">
          <li>Java</li>
          <li>Python</li>
          <li>C</li>
          <li>HTML & CSS</li>
          <li>React</li>
          <li>Assembly</li>
          <li>MongoDB</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Adobe Illustrator, Photoshop</li>
        </ul>
      </div>
    </section>
  );
};
