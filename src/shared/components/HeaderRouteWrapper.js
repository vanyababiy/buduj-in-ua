import React from "react";
import { withRouter } from "react-router-dom";

import MainNavigation from "./Navigation/MainNavigation";

const HeaderRouteWrapper = () => {
  return (
    <React.Fragment>
      <MainNavigation />
    </React.Fragment>
  );
};

export default withRouter(HeaderRouteWrapper);
