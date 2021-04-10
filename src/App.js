import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import HeadNav from "./components/HeadNav";
import ResponsivePage from "./view/ResponsivePage/ResponsivePage";
import Shop from "./view/Shop";

function App() {
  return (
    <div className="App">
      <Router>
        <HeadNav />
        <Switch>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route path="/responsive">
            <ResponsivePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
