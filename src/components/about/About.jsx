import React from "react";
import "./about.css";
import aboutimage from "../../assets/About_Image.jpeg";
import {
  AiOutlineLaptop,
  AiOutlineTeam,
  AiOutlineFolderOpen,
} from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__image">
            <img src={aboutimage} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <AiOutlineLaptop className="about__icon" />
              <h5>Experience</h5>
              <h6>2+ Years Working</h6>
            </article>
            <article className="about__card">
              <AiOutlineTeam className="about__icon" />
              <h5>Companies</h5>
              <h6>5+ Years Working</h6>
            </article>
            <article className="about__card">
              <AiOutlineFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <h6>30+ Completed Projects</h6>
            </article>
          </div>
          <p>
            A highly motivated and hard-working junior software developer with a
            passion for creating intuitive and functional websites/web
            applications. Proficient in JavaScript, Typescript, React and
            Playwright, with a strong understanding of design patterns and
            software architecture.
          </p>

          <a href="#contact" className="btn btn-primary">
            Chat Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
