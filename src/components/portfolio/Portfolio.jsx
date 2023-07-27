import React from "react";
import "./portfolio.css";
import aboutimage from "../../assets/About_Image.jpeg";

const data = [
  {
    id: 1,
    image: aboutimage,
    title: "The Pokedex App",
    github: "https://github.com/craigea92/pokedex-app",
    demo: "",
  },
  {
    id: 2,
    image: aboutimage,
    title: "An Emojipedia App",
    github: "https://github.com/craigea92/emojipedia-app",
    demo: "",
  },
  {
    id: 3,
    image: aboutimage,
    title: "The Keeper App",
    github: "https://github.com/craigea92/the-keeper-app",
    demo: "",
  },
  {
    id: 4,
    image: aboutimage,
    title: "An Expenses App",
    github: "https://github.com/craigea92/expenses-app",
    demo: "",
  },
  {
    id: 5,
    image: aboutimage,
    title: "A Contacts App",
    github: "https://github.com/craigea92/contacts-app",
    demo: "",
  },
  {
    id: 6,
    image: aboutimage,
    title: "A Login Portal App",
    github: "https://github.com/craigea92/a-login-portal",
    demo: "",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item__image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item__cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
