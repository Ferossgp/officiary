import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./views/profile/index";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
