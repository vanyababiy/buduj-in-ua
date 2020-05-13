import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/home">ГОЛОВНА</NavLink>
      </li>
      <li>
        <NavLink to="/about">ПРО НАМ</NavLink>
      </li>
      <li>
        <NavLink to="/prices">ЦІНИ</NavLink>
      </li>
      <li>
        <NavLink to="/work">НАШІ РОБОТИ</NavLink>
      </li>
      <li>
        <NavLink to="/category">КАТЕГОРІЇ</NavLink>
      </li>
      <li>
        <NavLink to="/auth">ВХІД</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
