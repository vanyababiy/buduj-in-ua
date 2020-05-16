import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
} from "react-router-dom";

import HeaderRouteWrapper from "./shared/components/HeaderRouteWrapper";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <HeaderRouteWrapper/>
          <Redirect to="/" />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
