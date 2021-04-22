import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './footer.scss';

import logo from './logo-NkDev.png';

const Footer = () => {
  return (
    <footer className="footer">
        <NavLink className="footer-link" to="/">Réalisé par <img className="footer-logo" src={logo} alt=""/></NavLink>
    </footer>
  );
}

export default Footer;