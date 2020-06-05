import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
// components
import ReactApp from './components/ReactApp';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/thank-you">
            <ReactApp />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
