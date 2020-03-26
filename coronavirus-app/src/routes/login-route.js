import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Login, App } from "../components";

import { LOGIN, MAIN } from "./paths";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={LOGIN} component={Login} />
      <Route exact path={MAIN} component={App} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
