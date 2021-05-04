import React from 'react';
import { NavLink, Link } from "react-router-dom";

import Discord from './discord'

 // ==== CSS ==== //

 import logo from '../../../assets/images/logo.png'
 import './footer.scss'

const Footer = () => {

  const handleClick = (evt) => {
		const discordFocus = document.getElementById('discord')
		if (discordFocus.className === "discord--Frame__invalide") {
			return discordFocus.className = "discord--Frame__valide";
		}
		return discordFocus.className = "discord--Frame__invalide"
	};

  return(
    
    <footer className="footer text-faded text-center py-5">
      <div className="container footer-content">

        <div className="footer-head">

          <h3 className="footer-title">The Independent Gamers</h3>
          <h3 className="footer-title-under">New generation of soldiers</h3>

        </div>

        <div className="footer-info">

          <div className="footer-copyright">
            <img className="footer-logo" src={logo} alt="logo The Independent Gamers"/>

            <p className="footer-copyright-p">Tous droits réservés &copy; The Independent Gamers - 2021</p>
          </div>

          <div className="header-navicon">

            <a onClick={handleClick} ><i className="fab fa-discord"></i></a>

            <a href="https://www.facebook.com/theindependentgamers" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>

            <a href="https://www.youtube.com/channel/UC1qQ_J-7e9WGjwo9FzbHkHg" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>

            <Link to="/twitch"><i className="fab fa-twitch"></i></Link>

          </div>

        </div>

        <NavLink to="/mentions-legales">Mentions Légales</NavLink>

      </div>
      <Discord />
    </footer>
  );
}

export default Footer;