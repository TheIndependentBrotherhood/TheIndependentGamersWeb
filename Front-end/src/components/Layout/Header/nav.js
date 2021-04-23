import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Redirect } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';

const Nav = ({isLogged, changeField, name}) => {

    const handleclickonburger = (evt) => {

        let nav = document.getElementById('navshow');
        if (nav.className === "collapse navbar-collapse" ){
            return nav.className = "collapse navbar-collapse show";
        }
        return nav.className = "collapse navbar-collapse";
    };

    const handleclickonlink = (evt) => {
        let nav = document.getElementById('navshow');
        return nav.className = "collapse navbar-collapse";
    }

    const handleLoggout = (evt) => {
        localStorage.setItem('cookiesOk', false);
        localStorage.removeItem('saveEmail');
        localStorage.removeItem('savePassword');
        changeField(false, "isLogged");
        changeField('', "loginemail");
        changeField('', "loginpassword");
        changeField('', "registeremail");
        changeField('', "registerpassword");
        changeField(null, "token");
        changeField('', "name");
        changeField('', "email");
        changeField('', "role");
        changeField(null, "api_token");
    };

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav-content">

            <button className="navbar-toggler" onClick={handleclickonburger} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="toggler-white"><i className="fas fa-bars"></i></span>
            </button>

            <a className="navbar-brand nav-title" href="">The Independent Gamers</a>

            <div className="collapse navbar-collapse" id="navshow">
                <div className="navbar-nav">
                    <ul className="navbar-nav ml-1">

                        <li className="nav-item px-lg-4">
                            <NavLink onClick={handleclickonlink} className="nav-link text-uppercase text-expanded" to="/">home</NavLink>
                        </li>

                        <li className="nav-item px-lg-4">
                            <NavLink onClick={handleclickonlink} className="nav-link text-uppercase text-expanded" to="/jeux">Jeux</NavLink>
                        </li>

                        <li className="nav-item px-lg-4">
                            <NavLink onClick={handleclickonlink} className="nav-link text-uppercase text-expanded" to="/membres">Membres</NavLink>
                        </li>

                        <li className="nav-item px-lg-4">
                            <NavLink onClick={handleclickonlink} className="nav-link text-uppercase text-expanded" to="/twitch">Twitch</NavLink>
                        </li>

                        <li className="nav-item px-lg-4">
                            <NavLink onClick={handleclickonlink} className="nav-link text-uppercase text-expanded" to="/events">Events</NavLink>
                        </li>

                        <li className="nav-item px-lg-4">
                            <NavLink onClick={handleclickonlink} className="nav-link text-uppercase text-expanded" to="/recrutement">Recrutements</NavLink>
                        </li>

                    {!isLogged && (
                        <li className="nav-login nav-item px-lg-4">
                            <NavLink onClick={handleclickonlink} className="nav-link text-uppercase text-expanded" to="/connexion">Connexion</NavLink>
                        </li>
                    )}
                    {isLogged && (
                        <Dropdown className="nav-logged">
                            <Dropdown.Toggle variant="none" id="dropdown-basic">
                                {name}
                            </Dropdown.Toggle>
    
                            <Dropdown.Menu>
                                <NavLink className="dropdown-item" onClick={handleclickonlink} to="/profil">Profil</NavLink>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={handleclickonlink, handleLoggout} href="#">Deconnexion</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;



