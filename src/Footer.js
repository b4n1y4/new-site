import React from "react";

import socials from "./socials";

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        {socials.map((link) => {
          return (
            <a href={link.url} className="social-link" key={link.url}>
              {link.icon}
            </a>
          );
        })}
      </div>
      <div className="footer-bottom">
        <p className="footer-text">
          COPYRIGHT © 2022-2023 DEF CON ®️ DELHI GROUP | DC9111 - ALL RIGHTS
          RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;
