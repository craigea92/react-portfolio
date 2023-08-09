/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import "./footer.css";
import FooterSocials from "./FooterSocials";


const Footer = () => {
  return <footer>
    <a href="#" className="footer__logo">CRAIG</a>

    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <FooterSocials className=""/>
  </footer>;
};

export default Footer;
