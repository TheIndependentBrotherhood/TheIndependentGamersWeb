import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from "react-router-dom";

 // ==== CSS ==== //

 import './footer.scss'

const Footer = () => (
    
	<footer className="footer text-faded text-center py-5">
    <div className="container">
      <NavLink to="/mentions-legales">Mentions Légales</NavLink>
      <p className="m-b-3 small">Tous droits réservés &copy; The Independent Gamers 2020 - 2021</p>
    </div>
  </footer>
);

export default Footer;