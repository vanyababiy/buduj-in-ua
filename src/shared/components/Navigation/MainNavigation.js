import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./MainNavigation.css";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import CategoryNavLinks from "./CategoryNavLinks";

const MainNavigation = (props) => {
  if (props.location.pathname === "/category") {
    return (
      <MainHeader>
        <h1 className="main-navigation__title">
          <Link to="/">БУДУЙ ІН UA</Link>
        </h1>
        <CategoryNavLinks />
      </MainHeader>
    );
  }
  return (
    <MainHeader>
      <h1 className="main-navigation__title">
        <Link to="/">БУДУЙ ІН UA</Link>
      </h1>
      <NavLinks />
    </MainHeader>
  );
};

export default withRouter(MainNavigation);
