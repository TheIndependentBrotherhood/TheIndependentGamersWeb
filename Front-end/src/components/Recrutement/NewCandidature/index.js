import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Redirect } from "react-router-dom";

import './newcandidature.scss'

const NewCandidature = () => {

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

                <section className="newcandidature-content">

                    <p>Avant de rédiger votre candidature, merci de vous assurez d'avoir lu le <NavLink to="recrutement-a-lire">Règlement de postulation</NavLink></p>

                    <div className="newcandidature-textarea">
                        <textarea class="form-control" rows="15"></textarea>
                    </div>

                    <div className="newcandidature-send">

                        <div className="newcandidature-input">
                            <label htmlFor="scales">J'ai lu et j'accepte le <NavLink to="recrutement-a-lire">Règlement de postulation</NavLink></label>
                            <input type="checkbox" id="scales" name="scales" />
                        </div>

                        <button>Envoyer</button>

                    </div>

                </section>

            </div>

        </main>
    );
};

export default NewCandidature;

/*

            {!isLogged && (
                <Redirect push to="/" />
            )}

*/