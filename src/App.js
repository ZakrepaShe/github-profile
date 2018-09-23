import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StartList from "./pages/StartList";
import User from "./pages/User";

class App extends Component {
  render() {
    return (
      <Router basename="/github-profile">
        <Switch>
          <Route path="/:user" component={User} />
          <Route exact path="/" component={StartList} />
        </Switch>
      </Router>
    );
  }
}

export default App;
