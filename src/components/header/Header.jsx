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

    <div className="me">
      <img src={headerimage} alt=""/>
    </div>

    <a href="#contact" className="scroll__down">Scroll Down</a>

    <HeaderSocials />
  </div>
  </header>;
  
};

export default Header;
