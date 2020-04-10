import React from "react";

import Navbar from "./components/Navbar";
import LinkForm from "./pages/LinkForm";
import TopLinks from "./pages/TopLinks";
import OpenLink from "./pages/OpenLink";
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Navbar />
        <Switch>
          <Route path="/top-links" exact><TopLinks /></Route>
          <Route path="/:slug" exact><OpenLink /></Route>
          <Route path="/" exact><LinkForm /></Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
