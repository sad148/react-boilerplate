import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from './Components/About';
import Home from "./Components/Home";
import Contact from './Components/Contact';

function AppRouter() {
    return (
      <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/contact/" component={Contact} />
          </Switch>
      </Router>
    );
  }
  
  export default AppRouter;