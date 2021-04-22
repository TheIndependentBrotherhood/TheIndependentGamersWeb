import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Redirect } from 'react-router-dom';

import './header.scss';

const Header = ({ isLogged, token, changeField }) => {

    const [redirect, useRedirect] = useState(false);

    const hundleLogout = () => {
        changeField("", "token");
        changeField(false, "isLogged");
    }

  return (
    <header className="header">
        <nav className="navbar navbar-expand-lg navbar navbar-light header-nav">
            <NavLink className="navbar-brand" to="/">Back-Office</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active deconnexion">
                        <NavLink className="nav-link" to="/new">Nouveau<span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item active deconnexion">
                        <NavLink onClick={hundleLogout} className="nav-link" to="/">Déconnexion <span className="sr-only">(current)</span></NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  );
}

export default Header;