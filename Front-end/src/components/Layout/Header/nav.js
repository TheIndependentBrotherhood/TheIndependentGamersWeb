import React from 'react';
import { NavLink } from "react-router-dom";
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
        localStorage.removeItem('token');
        changeField(false, "isLogged");
        changeField('', "loginemail");
        changeField('', "loginpassword");
        changeField('', "registeremail");
        changeField('', "registerpassword");
        changeField(null, "token");
        changeField('', "name");
        changeField('', "email");
        changeField('', "role");
        changeField(null, "id");
        changeField(false, "isAdmin")
    };

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav-content">

            <button className="navbar-toggler" onClick={handleclickonburger} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="toggler-white"><i className="fas fa-bars"></i></span>
            </button>

            <a className="navbar-brand nav-title" href="">The Independent Gamers</a>

            <div className="collapse navbar-collapse" id="navshow">

                    <ul className="navbar-nav">

                        <li className="nav-item px-lg-2">
                            <NavLink onClick={handleclickonlink} className="nav-link text-uppercase text-expanded" to="/">Accueil</NavLink>
                        </li>

                        <li className="nav-item px-lg-2">
                            <NavLink onClick={handleclickonlink} className="nav-link text-uppercase text-expanded" to="/jeux">Jeux</NavLink>
                        </li>

                        <li className="nav-item px-lg-2">
                            <NavLink onClick={handleclickonlink} className="nav-link text-uppercase text-expanded" to="/membres">Membres</NavLink>
                        </li>

                        <li className="nav-item px-lg-2">
                            <NavLink onClick={handleclickonlink} className="nav-link text-uppercase text-expanded" to="/twitch">Twitch</NavLink>
                        </li>

                        <li className="nav-item px-lg-2">
                            <NavLink onClick={handleclickonlink} className="nav-link text-uppercase text-expanded" to="/events">Evenements</NavLink>
                        </li>

                        <li className="nav-item px-lg-2">
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
        </nav>
    );
};

export default Nav;



