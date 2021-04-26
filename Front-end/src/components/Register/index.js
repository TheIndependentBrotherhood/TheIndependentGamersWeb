import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from "react-router-dom";

 // ==== CSS ==== //

 import './register.scss'

const Register = ({ name, registeremail, registerpassword, register, changeField, registerOk, registerNop }) => { 

    const [checkbox, setCheckbox] = useState(null);
    const [passwordCheck, setPasswordCheck] = useState(false);
    const [emailCheck, setEmailCheck] = useState(false);

    const onChangeCheckbox = (evt) => {
        setCheckbox(false);
        if(checkbox === false){
            setCheckbox(true);
        }
    }
    
    const onChangeName = (evt) => {
        changeField(evt.target.value, "name");
    };

    const onChangeEmail = (evt) => {
        changeField(evt.target.value, "registeremail");
    };

    const onChangePassword = (evt) => {
        changeField(evt.target.value, "registerpassword");
    };

    const passwordVerif = (evt) => {
        const password = document.getElementById('field-password');
        const passwordconfirm = document.getElementById('field-confirm_password');
        // console.log(password.value);
        if (evt.target.value === password.value) {
          password.style.backgroundColor = '#71bf42';
          passwordconfirm.style.backgroundColor = '#71bf42';
          setPasswordCheck(false);
        }
        else {
          password.style.backgroundColor = 'rgba(207, 95, 95, 0.5)';
          passwordconfirm.style.backgroundColor = 'rgba(207, 95, 95, 0.5)';
          setPasswordCheck(true);
        }
    };

    const emailVerif = (evt) => {
        const email = document.getElementById('field-email');
        const emailconfirm = document.getElementById('field-confirm_email');
        // console.log(password.value);
        if (evt.target.value === email.value) {
            email.style.backgroundColor = '#71bf42';
            emailconfirm.style.backgroundColor = '#71bf42';
            setEmailCheck(false);
        }
        else {
            email.style.backgroundColor = 'rgba(207, 95, 95, 0.5)';
            emailconfirm.style.backgroundColor = 'rgba(207, 95, 95, 0.5)';
            setEmailCheck(true);
        }
    };

    const submitregister = (evt) => {

        evt.preventDefault()

        const password = document.getElementById('field-password').value;
        const confirm_password = document.getElementById('field-confirm_password').value;
        const email = document.getElementById('field-email').value;
        const confirm_email = document.getElementById('field-confirm_email').value;
        console.log(registerNop);

        if( password === confirm_password && email === confirm_email && checkbox === false ){
            register();
        }
        else if(password === confirm_password && email === confirm_email && checkbox != false ){
            setCheckbox(true);
        }
        else if(password != confirm_password && email === confirm_email && checkbox === false ){
            setPasswordCheck(true);
        }
        else if(password === confirm_password && email != confirm_email && checkbox === false ){
            setEmailCheck(true);
        }
    };

    
    return(
        <> 
            <main className="register container">
                <nav className="register-nav">
                    <NavLink className="register-nav-link" to="/connexion">Connexion</NavLink>
                    <span>|</span>
                    <NavLink className="register-nav-link" to="/inscription">Inscription</NavLink>
                </nav>
                <div className="register-content">
                    <h1 className="register-title">Inscription</h1>
                    <form onSubmit={submitregister} className="register-form" action="" method="post">
                        <div className="register-form-input form-group">
                            <label>Pseudo</label>
                            <input onChange={onChangeName} type="text" value={name} />
                        </div>
                        <div className="register-form-input form-group">
                            <label>Email</label>
                            <input onChange={onChangeEmail} id="field-email" type="email" value={registeremail} />
                        </div>
                        <div className="register-form-input form-group">
                            <label>Confirmé l'Email</label>
                            <input onChange={emailVerif} id="field-confirm_email" type="email" />
                        </div>
                        <div className="register-form-input form-group">
                            <label>Mot de Passe</label>
                            <input onChange={onChangePassword} id="field-password" type="password" value={registerpassword} />
                        </div>
                        <div className="register-form-input form-group">
                            <label>Confirmé le Mot de Passe</label>
                            <input onChange={passwordVerif} id="field-confirm_password" type="password" />
                        </div>
                        <div className="register-form-checkbox">
                            <input onChange={onChangeCheckbox} type="checkbox" id="scales" name="scales" />
                            <label htmlFor="scales">J'ai lu et j'accepte <a href="/mentions-legales#conditions">les conditions d'utilisation</a></label>
                        </div>
                        <div className="register-form-button_div">
                        <button className="register-form-button" type="submit"><i class="fas fa-play-circle"></i></button>
                        </div>
                    </form>
                </div>
            </main>

            <div className="registerCheck">

                {passwordCheck && (
                    <div className="register-send-nop">
                        Le mot de passe ne corresponde pas.
                    </div>
                )}
                {emailCheck && (
                    <div className="register-send-nop">
                        L'Email ne corresponde pas.
                    </div>
                )}
                {checkbox && (
                    <div className="register-send-nop">
                        Merci d'accepter les conditions.
                    </div>
                )}
                {registerOk && (
                    <div className="register-send-ok">
                        Vous être inscrit, vous pouvez à présent <a href="/connexion">vous connecter</a>
                    </div>
                )}
                {registerNop && (
                    <div className="register-send-nop">
                        Une erreur a été détécté, merci de vérifier que votre email et votre mot de passe correspondent et que vous avez bien accepté les conditions d'utilisation. <br />
                        Si le problème persiste merci de contacter un administrateur.
                    </div>
                )}

            </div>
        </>
    );
};
export default Register;