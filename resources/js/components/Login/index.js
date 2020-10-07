import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Redirect } from "react-router-dom";
import {login} from "../UserFunctions.js"

 // ==== CSS ==== //

 import './login.scss'

const Login = ({ changeFieldLoading, loginemail, loginpassword, isLogged, logIn, changeField}) => { 

    const submitLogin = (evt) => {
        evt.preventDefault();
        changeFieldLoading(true, 'loading');
        logIn();
    }

    const onChangeEmail = (evt) => {
        changeField(evt.target.value, "loginemail");
    };

    const onChangePassword = (evt) => {
        changeField(evt.target.value, "loginpassword");
    };
    
    return(
        <main className="login container">
            <nav className="login-nav">
                <NavLink className="login-nav-link" to="/connexion">Connexion</NavLink>
                <span>/</span>
                <NavLink className="login-nav-link" to="/inscription">Inscription</NavLink>
            </nav>
            <div className="login-content">
                <h1 className="login-title">Connection</h1>
                <form onSubmit={submitLogin} className="login-form" action="" method="post">
                    <div className="login-form-input form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input onChange={onChangeEmail} type="email" value={loginemail} />
                    </div>
                    <div className="login-form-input form-group">
                        <label htmlFor="exampleInputPassword1">Mot de Passe</label>
                        <input onChange={onChangePassword} type="password" value={loginpassword} />
                    </div>
                    <button className="login-form-button" type="submit">Se Connecter</button>
                </form>
                {isLogged && (
                    <Redirect push to="/" />
                )}
            </div>
        </main>
    );
};

export default Login;