import { Slider } from "material-ui-core";
import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ReCrsl from "./pages/ReCrsl";
import "./dashboard.css";
import "./App.css";

import Slidbar from "./pages/Slidbar";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/users">
            <Slidbar />
          </Route>
          <Route path="/recrsl">
            <ReCrsl />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
