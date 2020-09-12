import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from "react-router-dom";

 // ==== CSS ==== //

 import './login.scss'

const Login = () => (
    
	<main className="login container">
        <div className="login-content">
            <h1 className="login-title">Connection</h1>
            <form className="login-form" action="" method="post">
                <div className="login-form-input form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email"/>
                </div>
                <div className="login-form-input form-group">
                    <label for="exampleInputPassword1">Mot de Passe</label>
                    <input type="password"/>
                </div>
                <button className="login-form-button" type="submit">Se Connecter</button>
            </form>
        </div>
    </main>
);

export default Login;