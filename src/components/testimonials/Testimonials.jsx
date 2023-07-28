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
    name: "John Snow",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis",
  },
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
