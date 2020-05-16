import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = () => {
 
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <NavLink to="/" exact>
            ГОЛОВНА
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" exact>
            ПРО НАC
          </NavLink>
        </li>
        <li>
          <NavLink to="/prices" exact>
            ЦІНИ
          </NavLink>
        </li>
        <li>
          <NavLink to="/work" exact>
            НАШІ РОБОТИ
          </NavLink>
        </li>
        <li>
          <NavLink to="/category" exact>
            КАТЕГОРІЇ
          </NavLink>
        </li>
        <li>
          <NavLink to="/auth" exact>
            ВХІД
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
