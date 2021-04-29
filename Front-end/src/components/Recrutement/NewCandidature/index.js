import React, { useState } from 'react';
import { NavLink, Redirect } from "react-router-dom";
import ReCAPTCHA from 'react-google-recaptcha';
import logo from '../../../assets/images/logo.png'

import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

import './newcandidature.scss'

import {slugifyTitle} from "../../../utils"

const NewCandidature = ( {isLogged, newPostTitle, newPostContent, changeField, addNewPost, newPostNop, newPostOk} ) => {

    const [checkbox, setCheckbox] = useState(null);
    const [verif, setVerif] = useState(false);
    const [contentOk, setContentOk] = useState(false);

    const handleReCAPTCHA = (evt) => {
        if(verif === true){
            setVerif(false);
        };
        setVerif(true);
    };

    const handleTitle = (evt) => {
        evt.preventDefault();
        changeField(evt.target.value, 'newPostTitle');
    }

    const handleContent = (evt) => {
        evt.preventDefault();
        changeField(evt.target.value, 'newPostContent');
    }

    const onChangeCheckbox = (evt) => {
        setCheckbox(false);
        if(checkbox === false){
            setCheckbox(true);
        }
    }

    const handleEmojiAdd = (evt) => {
        let textarea = document.getElementById('newcandidature-textarea')
        const value = textarea.value = newPostContent + evt.native
        changeField(value, 'newPostContent');
    };

    const handleClick = (evt) => {
        evt.preventDefault();
        if(newPostContent != '' && checkbox == false && newPostTitle != ''){
            addNewPost();
            setContentOk(false)
        } else{
            setContentOk(true)
        }
    };

    return(
        <main className="newcandidature">

            <div className="newcandidature-container container">

                <div className="newcandidature-head">

                    <div className="newcandidature-header">
                        <img className="newcandidature-img" id="logo" src={logo} alt="logo" />
                        <h1 className="newcandidature-title">Intégrer les Independent Gamers</h1>
                    </div>

                </div>

                {!newPostOk && (
                    <form onSubmit={handleClick} className="newcandidature-content">

                        <p>Avant de rédiger votre candidature, merci de vous assurez d'avoir lu le <NavLink to="recrutement-a-lire">Règlement de postulation</NavLink></p>

                        <div className="newcandidature-textarea">
                            <input onChange={handleTitle} placeholder="Titre de votre Candidature" className="form-control" rows="15" value={newPostTitle} ></input>
                        </div>
                        
                        <div className="newcandidature-textarea">
                            <textarea id="newcandidature-textarea" onChange={handleContent} placeholder="Contenu de votre Candidature" className="form-control" rows="15" value={newPostContent} ></textarea>
                            <Picker onSelect={handleEmojiAdd} />
                        </div>

                        <div className="newcandidature-send">

                            <div className="newcandidature-input">
                                <label htmlFor="scales">J'ai lu et j'accepte le <NavLink to="recrutement-a-lire">Règlement de postulation</NavLink></label>
                                <input onChange={onChangeCheckbox} type="checkbox" id="scales" name="scales" />
                            </div>

                        </div>

                        <ReCAPTCHA
                            className="ReCAPTCHA"
                            sitekey="6Let7vEUAAAAAEyvmRWIQ-j8FN8jszkaXToHR2UB"
                            onChange={handleReCAPTCHA}
                            >
                            {contentOk && (
                                <div className="postcandidature-textarea" id="postcandidature-textarea">
                                    <h4>Merci d'écrire un titre, un post et d'accepter le règlement de postulation pour pouvoir publier</h4>
                                </div>
                            )}
                            {verif
                            && (
                                <input className="contact-send-input" type="submit" onClick={handleClick} />
                            )}
                            {newPostNop && (
                                <div className="newcandidatureNop">
                                    <p>Quelques chose semble s'être mal passé, Merci de réessayer</p>
                                </div>
                            )}
                        </ReCAPTCHA>

                    </form>
                )}

                {newPostOk && (
                    <div className="newcandidatureOk">
                        <h2 className="newcandidatureOk-h2">Votre candidature a été posté</h2>
                        <p className="newcandidatureOk-p">Vous pouvez y accèder <NavLink className="newcandidatureOk-p-link" to={`/candidature/${slugifyTitle(newPostTitle)}`}>ici</NavLink></p>
                    </div>
                )}

                {!isLogged && (
                    <Redirect push to="/connexion" />
                )}

            </div>

        </main>
    );
};

export default NewCandidature;