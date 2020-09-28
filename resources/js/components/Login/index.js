import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from "react-router-dom";
import {login} from "../UserFunctions.js"

 // ==== CSS ==== //

 import './login.scss'

const Login = (isLogged) => { 

    const [getEmail, setEmail] = useState('');
    const [getPassword, setPassword] = useState('');

    const onChangeEmail = (evt) => {
        setEmail(evt.target.value);
    }

    const onChangePassword = (evt) => {
        setPassword(evt.target.value);
    }

    const submitLogin = (evt) => {
        evt.preventDefault()

        const user = {
            email: getEmail,
            password: getPassword
        }

        login(user);
        // console.log(isLogged);
    }
    
    return(
        <main className="login container">
            {logOut && (
                <Redirect push to="/connection" />
            )}
            {login && (
                <Redirect push to="/" />
            )}
            <nav className="login-nav">
                <NavLink className="login-nav-link" to="/connection">Connexion</NavLink>
                <span>/</span>
                <NavLink className="login-nav-link" to="/inscription">Inscription</NavLink>
            </nav>
            <div className="login-content">
                <h1 className="login-title">Connection</h1>
                <form onSubmit={submitLogin} className="login-form" action="" method="post">
                    <div className="login-form-input form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input onChange={onChangeEmail} type="email"/>
                    </div>
                    <div className="login-form-input form-group">
                        <label htmlFor="exampleInputPassword1">Mot de Passe</label>
                        <input onChange={onChangePassword} type="password"/>
                    </div>
                    <button className="login-form-button" type="submit">Se Connecter</button>
                </form>
            </div>
        </main>
    );
};
export default Login;