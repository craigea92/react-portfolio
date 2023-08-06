/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import "./footer.css";
import FooterSocials from "./FooterSocials";


const Footer = () => {
  return <footer>

    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <FooterSocials/>

    <div className="footer__copyright">
      <h6>&copy; CRAIG EATON. All rights reserved</h6>
    </div>
  </footer>;
};

export default Footer;
