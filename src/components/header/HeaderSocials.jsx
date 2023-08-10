import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://uk.linkedin.com/in/craigaeaton">
        <BsLinkedin />
      </a>
      <a href="https://github.com/craigea92">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
