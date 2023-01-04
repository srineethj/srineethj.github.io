import "./About.css";
import iconImage from "../../images/logo.png";

export const About = () => {
  return (
    <section id="about" className="container container-about">
      <div className="about-right">
        <img src={iconImage} alt="" />
      </div>
      <div className="about-left">
      <span className="white-text">
          Welcome to my <a href="">Portfolio</a> :) 
        </span>
        {/* <span className="purple-text">
          <span className="purple-smoke-text">Introduction 😇</span>{" "}
        </span> */}
        <p className="gray-text">
          Hello! I'm an undegraduate computer science (CSE) student at <a href="https://stonybrook.edu"><span className="text-sbu"> Stony Brook University </span></a> in the Greater New York City Area. I am currently specializing in Human Computer Interaction, minoring in biology, and I'm interested in the intersection of computer science and medicine. I am passionate about problem solving, increasing the accessibility of technology and desinging human centered products. I am currently looking for opportunities for Summer 2023 – please feel free to email me at <span className="white-text">svjayanthi [at] cs [dot] stonybrook [dot] edu.</span>{" "}
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
