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
          <div className="about_cards">
            <article className="about__card">
              <AiOutlineLaptop className="about__icon" />
              <h5>Experience</h5>
              <h6>3+ Years Working</h6>
            </article>
            <article className="about__card">
              <AiOutlineTeam className="about__icon" />
              <h5>Companies</h5>
              <h6>3+ Years Working</h6>
            </article>
            <article className="about__card">
              <AiOutlineFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <h6>30+ Completed Projects</h6>
            </article>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              corporis veniam ipsam mollitia similique alias expedita nam a
              blanditiis cumque nihil, perspiciatis exercitationem, officiis
              optio necessitatibus laborum doloribus. Sit, impedit?
            </p>

            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
