import React from "react";
import { GithubIcon, EmailIcon } from "./icons";

const Footer = () => {
  return (
    <div className="h-32 lg:w-1/2 w-5/6 flex justify-between items-center mx-auto Absolute">
      <p>© 2022 Goga Okradze. All Rights Reserved.</p>
      <div className="flex">
        <a
          className="mx-3"
          target="_blank"
          href="mailto:deathofsuper@gmail.com"
          rel="noopener noreferrer"
        >
          <EmailIcon />
        </a>
        <a
          className="mx-3 "
          target="_blank"
          href="https://github.com/gogaokradze"
          rel="noopener noreferrer"
        >
          <GithubIcon className="hover:rotate-12" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
