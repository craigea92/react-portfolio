import React from "react";
import "./portfolio.css";
import aboutimage from "../../assets/About_Image.jpeg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={aboutimage} alt="" />
          </div>
          <h3>This is a portfolio title</h3>
          <div className="portfolio__item__cta">
            <a
              href="https://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
