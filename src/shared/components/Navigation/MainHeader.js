import React from "react";
import { withRouter } from "react-router-dom";

import "./MainHeader.css";

const MainHeader = (props) => {
  console.log(props);
  return <header className="main-header">{props.children}</header>;
};

export default withRouter(MainHeader);
