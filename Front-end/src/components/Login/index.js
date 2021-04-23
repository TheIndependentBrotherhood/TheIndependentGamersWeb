import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Redirect } from "react-router-dom";

 // ==== CSS ==== //

 import './login.scss'

const Login = ({ changeFieldLoading, loginemail, loginpassword, isLogged, logIn, changeField}) => { 

    const [checkbox, setCheckbox] = useState(null);

    const onChangeCheckbox = (evt) => {
        setCheckbox(true);
        localStorage.setItem('saveEmail', loginemail);
        localStorage.setItem('savePassword', loginpassword);
        if(checkbox === true){
            setCheckbox(false);
            localStorage.removeItem('saveEmail');
            localStorage.removeItem('savePassword');
        }
    }

    const submitLogin = (evt) => {
        evt.preventDefault();
        changeFieldLoading(true, 'loading');
        logIn();
    }

    const onChangeEmail = (evt) => {
        if (checkbox === true) {
            changeField(evt.target.value, "loginemail");
            localStorage.setItem('saveEmail', loginemail);
        }
        changeField(evt.target.value, "loginemail");
    };

    const onChangePassword = (evt) => {
        if (checkbox === true) {
            changeField(evt.target.value, "loginpassword");
            localStorage.setItem('savePassword', loginpassword);
        }
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
                <h1 className="login-title">Connexion</h1>
                <form onSubmit={submitLogin} className="login-form" action="" method="post">
                    <div className="login-form-input form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input onChange={onChangeEmail} type="email" value={loginemail} />
                    </div>
                    <div className="login-form-input form-group">
                        <label htmlFor="exampleInputPassword1">Mot de Passe</label>
                        <input onChange={onChangePassword} type="password" value={loginpassword} />
                    </div>
                    <div className="login-form-checkbox">
                        <input onChange={onChangeCheckbox} type="checkbox" id="scales" name="scales" />
                        <label htmlFor="scales">Restez connecté</label>
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