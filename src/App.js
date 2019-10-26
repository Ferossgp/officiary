import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./views/profile/index";
import Home from './views/home/index';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/profile/:id">
            <Profile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
