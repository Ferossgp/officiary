import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./views/profile/index";
import HomeRu from './views/home/ru';
import HomeEn from './views/home/en';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/profile/:id">
            <Profile />
          </Route>
          <Route path="/en">
            <HomeEn />
          </Route>
          <Route path="/">
            <HomeRu />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
