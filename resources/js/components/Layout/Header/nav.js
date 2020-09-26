import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from "react-router-dom";

const Nav = () => {


    const handleclickonburger = (evt) => {

        let nav = document.getElementById('navshow');
        if (nav.className === "collapse navbar-collapse" ){
            return nav.className = "collapse navbar-collapse show";
        }
        return nav.className = "collapse navbar-collapse"
    };

    const handleclickonlink = (evt) => {
        let nav = document.getElementById('navshow');
        return nav.className = "collapse navbar-collapse"
    }



    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav-content">

            <button className="navbar-toggler" onClick={handleclickonburger} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
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

                        <button className="nav-login nav-item px-lg-4">
                            <NavLink onClick={handleclickonlink} className="nav-link text-uppercase text-expanded" to="/connection">Connexion</NavLink>
                        </button>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;



