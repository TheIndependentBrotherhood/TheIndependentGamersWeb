import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Link } from "react-router-dom";

import Discord from './discord'

 // ==== CSS ==== //

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
      <div className="container">
        <div className="header-navicon">

          <a onClick={handleClick} ><i className="fab fa-discord"></i></a>

          <a href="https://www.facebook.com/theindependentgamers" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>

          <a href="https://www.youtube.com/channel/UC1qQ_J-7e9WGjwo9FzbHkHg" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>

          <Link to="/twitch"><i className="fab fa-twitch"></i></Link>

        </div>
        <NavLink to="/mentions-legales">Mentions Légales</NavLink>
        <p className="m-b-3 small">Tous droits réservés &copy; The Independent Gamers 2020 - 2021</p>
      </div>
      <Discord />
    </footer>
  );
}

export default Footer;