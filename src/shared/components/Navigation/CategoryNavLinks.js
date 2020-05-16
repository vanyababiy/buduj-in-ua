import React from "react";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const CategoryNavLinks = () => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <NavLink to="/" exact>
            ГОЛОВНА
          </NavLink>
        </li>
        <li>
          <NavLink to="/house" exact>
            ДІМ
          </NavLink>
        </li>
        <li>
          <NavLink to="/climate" exact>
            КЛІМАТ
          </NavLink>
        </li>
        <li>
          <NavLink to="/communications" exact>
            КОМУНІКАЦІЇ
          </NavLink>
        </li>
        <li>
          <NavLink to="/interior" exact>
            ІНТЕР'ЄР
          </NavLink>
        </li>
        <li>
          <NavLink to="/materials" exact>
            МАТЕРІАЛИ
          </NavLink>
        </li>
        <li>
          <NavLink to="/important" exact>
            ВАЖЛИВО
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

export default withRouter(CategoryNavLinks);
