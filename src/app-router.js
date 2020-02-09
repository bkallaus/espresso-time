import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './home';
import PourOver from './pour-over/pour-over';
import Espresso from './espresso/espresso';

function AppRouter() {
  return (
    <HashRouter basename='/'>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/pour-over/" component={PourOver} />
        <Route path="/espresso/" component={Espresso} />
      </div>
    </HashRouter>
  );
}

export default AppRouter;