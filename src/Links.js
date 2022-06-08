import React from "react";

import linkS from "./linksData";

const Links = () => {
  return (
    <>
      <div className="page-content">
        <div className="links">
          {linkS.map((link) => {
            return (
              <a
                href={link.URL}
                key={link.Name}
                style={{
                  backgroundColor: link.Color,
                  color: link.Text_Color,
                  boxShadow: `1px 1px 15px ${link.Color}`,
                }}
                className="link"
              >
                {link.icon} {link.Name}
              </a>
            );
          })}
        </div>

        <hr />
      </div>
      <footer>
        <p className="footer-text">
          COPYRIGHT © 2022-2023 DEF CON ®️ DELHI GROUP | DC9111 - ALL RIGHTS
          RESERVED
        </p>
      </footer>
    </>
  );
};

export default Links;
