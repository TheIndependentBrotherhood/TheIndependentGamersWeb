import React, { useState } from 'react';
import { NavLink, Redirect } from "react-router-dom";

import './newcandidature.scss'

const NewCandidature = ( {isLogged, newPostTitle, newPostContent, changeField, addNewPost} ) => {

    const [checkbox, setCheckbox] = useState(null);

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

        console.log(checkbox)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(checkbox === false){
            addNewPost();
        }
    }

    return(
        <main className="newcandidature">

            <div className="newcandidature-container container">

                <div className="newcandidature-head">

                    <div className="newcandidature-header">
                        <img className="newcandidature-img" id="logo" src="https://www.theindependentgamers.fr/images/logo.png" alt="logo" />
                        <h2 className="newcandidature-title">Intégrer les Independent Gamers</h2>
                        <h2 className="newcandidature-title-sm">Intégrer les TIG</h2>
                    </div>

                </div>

                <form onSubmit={handleSubmit} className="newcandidature-content">

                    <p>Avant de rédiger votre candidature, merci de vous assurez d'avoir lu le <NavLink to="recrutement-a-lire">Règlement de postulation</NavLink></p>

                    <div className="newcandidature-textarea">
                        <input onChange={handleTitle} className="form-control" rows="15" value={newPostTitle} ></input>
                    </div>
                    
                    <div className="newcandidature-textarea">
                        <textarea onChange={handleContent} className="form-control" rows="15" value={newPostContent} ></textarea>
                    </div>

                    <div className="newcandidature-send">

                        <div className="newcandidature-input">
                            <label htmlFor="scales">J'ai lu et j'accepte le <NavLink to="recrutement-a-lire">Règlement de postulation</NavLink></label>
                            <input onChange={onChangeCheckbox} type="checkbox" id="scales" name="scales" />
                        </div>

                        <button>Envoyer</button>

                    </div>

                </form>

                {!isLogged && (
                    <Redirect push to="/connexion" />
                )}

            </div>

        </main>
    );
};

export default NewCandidature;