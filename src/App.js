import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route to="/" exact>
            <MainNavigation />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
