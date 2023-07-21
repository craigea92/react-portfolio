import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import headerimage from '../../assets/Header_Image.png'

const Header = () => {
  return <header>
  <div className="container header__container">
    <h5>Hello I'm</h5>
    <h1>Craig Eaton</h1>
    <h5 className="text-light">Frontend Developer</h5>
    <CTA />
    <HeaderSocials />

    <div className="header__image">
      <img src={headerimage} alt="Craig"/>
    </div>

    <a href="#contact" className="scroll__down">Scroll Down</a>
  </div>
  </header>;
  
};

export default Header;
