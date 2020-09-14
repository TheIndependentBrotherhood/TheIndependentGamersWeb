import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from "react-router-dom";

const Nav = () => (
<nav className="navbar navbar-expand-lg navbar-light bg-light nav-content">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className=""><i className="fas fa-bars"></i></span>
  </button>

  <a className="nav-title" href="">The Independent Gamers</a>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-1">

            <li className="nav-item px-lg-4">
                <NavLink className="nav-link text-uppercase text-expanded" to="/">home</NavLink>
            </li>

            <li className="nav-item px-lg-4">
                <NavLink className="nav-link text-uppercase text-expanded" to="/jeux">Jeux</NavLink>
            </li>

            <li className="nav-item px-lg-4">
                <NavLink className="nav-link text-uppercase text-expanded" to="/membres">Membres</NavLink>
            </li>

            <li className="nav-item px-lg-4">
                <NavLink className="nav-link text-uppercase text-expanded" to="/twitch">Twitch</NavLink>
            </li>

            <li className="nav-item px-lg-4">
                <NavLink className="nav-link text-uppercase text-expanded" to="/events">Events</NavLink>
            </li>

            <li className="nav-item px-lg-4">
                <NavLink className="nav-link text-uppercase text-expanded" to="/recrutement">Recrutements</NavLink>
            </li>

            <button className="nav-login nav-item px-lg-4">
                <NavLink className="nav-link text-uppercase text-expanded" to="/connection">Connexion</NavLink>
            </button>

        </ul>
  </div>
</nav>
);

export default Nav;



