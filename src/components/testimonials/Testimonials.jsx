import React from "react";
import "./testimonials.css";
import { AiOutlineUser } from "react-icons/ai";

const data = [
  {
    name: "John Snow",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis",
  },
  {
    name: "John Snow",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Code Collaborators'</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        {data.map(({ name, review }, index) => {
          return (
            <article key={index} className="testimonial">
              <AiOutlineUser className="client__avatar" />
              <h3 className="client__name">{name}</h3>
              <p className="client__review">{review}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
