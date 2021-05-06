import React, { useState } from 'react';
import { NavLink, Redirect } from "react-router-dom";

 // ==== CSS ==== //

 import decort from '../../assets/images/decort.png'
 import './login.scss'

const Login = ({ changeFieldLoading, loginemail, loginpassword, isLogged, logIn, changeField}) => { 

    const [checkbox, setCheckbox] = useState(null);

    const onChangeCheckbox = (evt) => {
        setCheckbox(true);
        if(checkbox === true){
            setCheckbox(false);
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

    document.title = `Connexion - The Independent Gamers`;
    
    return(
        <main className="login">
            <div className="login-total">
                <div className="login-1">
                    <nav className="login-nav">
                        <NavLink className="login-nav-link" to="/connexion">Connexion</NavLink>
                        <span>|</span>
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
                            <div className="login-form-button_div">
                                <button className="login-form-button" type="submit"><i className="fas fa-power-off"></i></button>
                            </div>
                        </form>
                        {isLogged && (
                            <Redirect push to="/" />
                        )}
                    </div>
                </div>
                <div className="login-2">
                    <div className="login-img-bg">
                        <img  src={decort} alt=""/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;