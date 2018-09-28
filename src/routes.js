import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Wizard from "./components/Wizard";

export default (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/wizard" component={Wizard}/>
  </Switch>
)

