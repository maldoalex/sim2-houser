import React from "react";
import Dashboard from "./components/Dashboard";
import Wizard from "./components/Wizard";
import { Switch, Route } from "react-router-dom";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/wizard" component={Wizard} />
  </Switch>
);
