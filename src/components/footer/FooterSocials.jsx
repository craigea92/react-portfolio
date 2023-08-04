import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const FooterSocials = () => {
  return (
    <div className="footer__socials">
      <a href="https://linkedin.com">
        <BsLinkedin />
      </a>
      <a href="https://github.com">
        <BsGithub />
      </a>
    </div>
  );
};

export default FooterSocials;
