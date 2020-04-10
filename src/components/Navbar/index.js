import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { Link as RouterLink } from "react-router-dom";

function Navbar(props) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button component={RouterLink} to="/" color="inherit">
          Home
        </Button>
        <Button component={RouterLink} to="/top-links" color="inherit">
          Top ranked links
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
