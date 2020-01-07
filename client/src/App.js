import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import asyncComponent from "util/asyncComponent";

const App = ({ match }) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route
        path={`${match.url}dashboard`}
        component={asyncComponent(() => import("./Dashboard"))}
      />
      {/* <Route path={`${match.url}/chat`} component={asyncComponent(() => import('./Chat'))} /> */}

      <Route path="/chat" component={asyncComponent(() => import("./Chat"))} />
      <Route path="/my-account" component={asyncComponent(() => import("./socialApps/Profile"))} />
      <Route path="/404" component={asyncComponent(() => import("./404"))} />
      <Redirect from="*" to="/404" />
    </Switch>
  </div>
);

export default App;
