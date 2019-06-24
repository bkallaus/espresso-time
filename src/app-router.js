import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './home';
import PourOver from './pour-over/pour-over';

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/pour-over/" component={PourOver} />
      </div>
    </Router>
  );
}

export default AppRouter;