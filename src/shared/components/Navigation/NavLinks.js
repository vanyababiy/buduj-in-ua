import React from "react";
import { NavLink, withRouter } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        {props.links.map((link) => {
          return (
            <li key={link.id}>
              <NavLink to={`${link.url}`} exact>
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default withRouter(NavLinks);
