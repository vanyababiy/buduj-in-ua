import React from "react";
import { withRouter } from "react-router-dom";

import "./MainNavigation.css";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";

import mainLinksGroup from "../../context/mainLinksGroup";

const MainNavigation = (props) => {
  const array = [];
  for (let i = 0; i < mainLinksGroup[0].length; i++) {
    array[i] = [mainLinksGroup[0][i], mainLinksGroup[i + 1]];
  }
  console.log(array);
  const entries = new Map(array);

  const mainLinks = Object.fromEntries(entries);

  for (let [key, value] of Object.entries(mainLinks)) {
    if (props.location.pathname === `/${key}`) {
      return (
        <MainHeader>
          <NavLinks links={value} />
        </MainHeader>
      );
    }
  }
};

export default withRouter(MainNavigation);
