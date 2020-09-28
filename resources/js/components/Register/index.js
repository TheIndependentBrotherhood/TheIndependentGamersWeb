import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from "react-router-dom";
import {register} from "../UserFunctions.js"

 // ==== CSS ==== //

 import './register.scss'

const Register = () => { 

    const [getName, setName] = useState('');
    const [getEmail, setEmail] = useState('');
    const [getPassword, setPassword] = useState('');

    
    const onChangeName = (evt) => {
        setName(evt.target.value);
    }

    const onChangeEmail = (evt) => {
        setEmail(evt.target.value);
    }

    const onChangePassword = (evt) => {
        setPassword(evt.target.value);
    }

    const submitregister = (evt) => {
        evt.preventDefault()

        const newUser = {
            name: getName,
            email: getEmail,
            password: getPassword
        }

        register(newUser);
    }
    
    return(
        <main className="register container">
            <nav className="register-nav">
                <NavLink className="register-nav-link" to="/connection">Connexion</NavLink>
                <span>/</span>
                <NavLink className="register-nav-link" to="/inscription">Inscription</NavLink>
            </nav>
            <div className="register-content">
                <h1 className="register-title">Inscription</h1>
                <form onSubmit={submitregister} className="register-form" action="" method="post">
                    <div className="register-form-input form-group">
                        <label>Pseudo</label>
                        <input onChange={onChangeName} type="text"/>
                    </div>
                    <div className="register-form-input form-group">
                        <label>Email</label>
                        <input onChange={onChangeEmail} type="email"/>
                    </div>
                    <div className="register-form-input form-group">
                        <label>Mot de Passe</label>
                        <input onChange={onChangePassword} type="password"/>
                    </div>
                    <button className="register-form-button" type="submit">S'Inscrire</button>
                </form>
            </div>
        </main>
    );
};
export default Register;