import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Link } from "react-router-dom";

 // ==== CSS ==== //

import './header.scss'
  // ==== Components ==== //

import Nav from './nav'

const Header = ({ isLogged, changeField, name }) => {

	return(
	<header className="header">

	  
      <div className="header-content">
				<div className="header-img">
					<img className="header-img" id="logo" src="https://www.theindependentgamers.fr/images/logo.png" alt="logo" />					
				</div>
				<div className="header-nav">
					<Nav isLogged={isLogged} changeField={changeField} name={name} />
				</div>
			</div>
	</header>
  );
};

export default Header;
 