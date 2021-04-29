import React from 'react';

 // ==== CSS ==== //

import './header.scss'
import logo from '../../../assets/images/logo.png'
  // ==== Components ==== //

import Nav from './nav'

const Header = ({ isLogged, changeField, name }) => {

	return(
	<header className="header">

	  
      <div className="header-content">
				<div className="header-img">
					<img className="header-img" id="logo" src={logo} alt="logo the independent gamers" />					
				</div>
				<div className="header-nav">
					<Nav isLogged={isLogged} changeField={changeField} name={name} />
				</div>
			</div>
	</header>
  );
};

export default Header;
 