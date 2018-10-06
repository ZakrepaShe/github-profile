import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux';
import {Notifs} from 'redux-notifications';
import store from './store';
import User from "./pages/User";
import 'redux-notifications/lib/styles.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router basename="/github-profile">
          <Fragment>
            <Switch>
              <Route path="/:user" component={User}/>
            </Switch>
            <Notifs/>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
