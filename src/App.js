import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Album from "./Album";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Pricing from "./Pricing";
import Dashboard from "./dashboard/Dashboard";
import Blog from "./blog/Blog";
// https://reacttraining.com/react-router/web/guides/quick-start

import { CssBaseline } from "@material-ui/core/";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <CssBaseline />
        <Switch>
          <Route path="/SignIn">
            <NavBar />
            <SignIn />
          </Route>
          <Route path="/SignUp">
            <NavBar />
            <SignUp />
          </Route>
          <Route path="/Blog">
            <Blog />
          </Route>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
          <Route path="/Pricing">
            <Pricing />
          </Route>
          <Route path="/">
            <NavBar />
            <Album />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
