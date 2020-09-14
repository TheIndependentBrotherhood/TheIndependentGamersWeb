import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Link } from "react-router-dom";

 // ==== CSS ==== //

 import './header.scss'

  // ==== Components ==== //

import Nav from './nav'
import Discord from './discord'

const Header = () => {

	const [discord, setDiscord] = useState(false);

	const handleMouseOver = (evt) => {
		const discordFocus = document.getElementById('discord')
		discordFocus.classList.add('discord--Frame__valide');
		discordFocus.classList.remove('discord--Frame__invalide');
	};

	const handleClick = (evt) => {
		const discordFocus = document.getElementById('discord')
		discordFocus.classList.add('discord--Frame__invalide');
		discordFocus.classList.remove('discord--Frame__valide');
	};

	return(
	<header className="header">

	  
      <div className="header-content">
				<div className="header-imgtitle">

						<img className="header-img" id="logo" src="images/logo.png" alt="logo" />

						<h1 className="header-title">
								The Independent Gamers
						</h1>

				</div>

				<div className="header-navicon">

						<a onClick={handleClick} onMouseOver={handleMouseOver} ><i className="fab fa-discord"></i></a>

						<a href="https://www.facebook.com/theindependentgamers" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-square"></i></a>

						<a href="https://www.youtube.com/channel/UC1qQ_J-7e9WGjwo9FzbHkHg" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>

						<Link to="/twitch"><i className="fab fa-twitch"></i></Link>

				</div>
			</div>
			<Nav />
			<Discord />
	</header>
  );
};

export default Header;
 