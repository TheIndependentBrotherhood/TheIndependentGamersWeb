import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Link } from "react-router-dom";

 // ==== CSS ==== //

import './header.scss'
  // ==== Components ==== //

import Nav from './nav'
import Discord from './discord'

const Header = ({ isLogged, changeField, name }) => {

	const handleClick = (evt) => {
		const discordFocus = document.getElementById('discord')
		if (discordFocus.className === "discord--Frame__invalide") {
			return discordFocus.className = "discord--Frame__valide";
		}
		return discordFocus.className = "discord--Frame__invalide"
	};

	return(
	<header className="header">

	  
      <div className="header-content">
				<div className="header-imgtitle">

						<img className="header-img" id="logo" src="https://theindependentgamers.fr/images/logo.png" alt="logo" />

						<h1 className="header-title">
								The Independent Gamers
						</h1>

				</div>

				<div className="header-navicon">

						<a onClick={handleClick} ><i className="fab fa-discord"></i></a>

						<a href="https://www.facebook.com/theindependentgamers" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>

						<a href="https://www.youtube.com/channel/UC1qQ_J-7e9WGjwo9FzbHkHg" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>

						<Link to="/twitch"><i className="fab fa-twitch"></i></Link>

				</div>
			</div>
			<Nav isLogged={isLogged} changeField={changeField} name={name} />
			<Discord />
	</header>
  );
};

export default Header;
 