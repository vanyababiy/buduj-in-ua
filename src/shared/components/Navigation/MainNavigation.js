import React from "react";
import { Link } from "react-router-dom";

import "./MainNavigation.css";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <h1 className="main-navigation__title">
        <Link to="/">БУДУЙ В УКРАЇНІ</Link>
      </h1>
      <NavLinks />
    </MainHeader>
  );
};

export default MainNavigation;
