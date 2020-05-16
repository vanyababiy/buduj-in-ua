import React from "react";
import { withRouter, Link } from "react-router-dom";

import "./MainHeader.css";

const MainHeader = (props) => {
  return (
    <header className="main-header">
      <h1 className="main-navigation__title">
        <Link to="/">БУДУЙ ІН UA</Link>
      </h1>
      {props.children}
    </header>
  );
};

export default withRouter(MainHeader);
