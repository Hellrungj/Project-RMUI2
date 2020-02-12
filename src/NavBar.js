import React from "react";
import { Toolbar, AppBar, Typography, Button } from "@material-ui/core/";
import { Link as Router_Link } from "react-router-dom";

export default function NavBar() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          component={Router_Link}
          to="/"
        >
          React-Material-UI
        </Typography>
        <Button color="inherit" component={Router_Link} to="/Blog">
          Blog
        </Button>
        <Button color="inherit" component={Router_Link} to="/Pricing">
          Pricing
        </Button>
        <Button color="inherit" component={Router_Link} to="/Dashboard">
          Dashboard
        </Button>
        <Button color="inherit" component={Router_Link} to="/SignIn">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}
