import "./About.css";
import iconImage from "../../images/logo.jpg";

export const About = () => {
  return (
    <section id="about" className="container container-about">
      <div className="about-left">
        <span className="purple-text">
          <span className="purple-smoke-text">Introduction 😇</span>{" "}
        </span>
        <p className="gray-text">
          Hello! I am a Computer Science student at Stony Brook University in the Greater New York City Area, NY. I have experience with the following technologies: {" "}
        </p>
        <span className="white-text">
          <a href="">Portfolio</a>
        </span>
        <ul className="tech-stack">
          <li></li>
          <li>Ui/Ux Designer</li>
          <li>Backed Developer</li>
        </ul>
        <a className="about-see" href="#">Ver màs {"->"} </a>
      </div>
      <div className="about-right">
        <img src={iconImage} alt="" />
      </div>
    </section>
  );
};
