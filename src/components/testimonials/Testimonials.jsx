import React from "react";
import "./testimonials.css";
import { AiOutlineUser } from "react-icons/ai";

// Import Swiper core and required modules
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    name: "Klaudia J.",
    review:
    "Your attention to detail and dedication to delivering high-quality code is truly impressive.",
  },
  {
    name: "Sam W.",
    review:
      "It's a pleasure to work alongside someone who consistently goes the extra mile for their colleagues.",
  },
  {
    name: "Joel B.",
    review:
      "Your positive attitude and willingness to collaborate makes our work environment so much better.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Code Collaborators'</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <AiOutlineUser className="client__avatar" />
              <h3 className="client__name">{name}</h3>
              <p className="client__review">{review}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
