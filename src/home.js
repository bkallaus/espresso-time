import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pour-over">Pour Over</Link></li>
        <li><Link to="/espresso">Espresso</Link></li>
    </ul>
  );
}

export default Home;
