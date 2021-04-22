import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './error404.scss';

const Home = () => {
  return (
    <main className="error404">
      <div className="error404-content">
        <h1>Error 404</h1>
        <NavLink to="/" >Retourner à l'accueil</NavLink>
      </div>
    </main>
  );
}

export default Home;