import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Redirect } from "react-router-dom";

import './recrutement.scss'

const Recrutement = () => {

    return(
        <main className="recrutement">

            <div className="recrutement-container container">

                <div className="recrutement-head">

                    <div className="recrutement-header">
                        <img className="recrutement-img" id="logo" src="https://www.theindependentgamers.fr/images/logo.png" alt="logo" />
                        <h2 className="recrutement-title">Intégrer les Independent Gamers</h2>
                        <h2 className="recrutement-title-sm">Intégrer les TIG</h2>
                    </div>

                    <div className="recrutement-before">
                        <h3><NavLink to="/recrutement-a-lire">➡️ À lire avant de postuler ⬅️</NavLink></h3>
                    </div>

                    <div className="recrutement-new">

                        <NavLink className="recrutement-new-link" aria-current="page" to="nouvelle-candidature">Nouvelle candidature</NavLink>

                    </div>


                </div>

                <section className="recrutement-content">

                    <table className="recrutement-table">
                        <thead>
                            <tr>
                                <th scope="col">Statut</th>
                                <th scope="col">Titre</th>
                                <th scope="col">Auteur</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="td-status-new">Nouvelle</th>
                                <td><NavLink to="/candidature-name">Recrutement Otto</NavLink></td>
                                <td className="td-auteur">Otto</td>
                            </tr>
                            <tr>
                                <th className="td-status-wait">En cours</th>
                                <td><NavLink to="/candidature-name">Recrutement Jacob</NavLink></td>
                                <td className="td-auteur">Jacob</td>
                            </tr>
                            <tr>
                                <th className="td-status-accept">Acceptée</th>
                                <td><NavLink to="/candidature-name">Recrutement Bird</NavLink></td>
                                <td className="td-auteur">Bird</td>
                            </tr>
                            <tr>
                                <th className="td-status-refuse">Refusée</th>
                                <td><NavLink to="/candidature-name">Recrutement Mercenaire</NavLink></td>
                                <td className="td-auteur">Mercenaire</td>
                            </tr>
                        </tbody>
                    </table>

                </section>

            </div>

        </main>
    );
};

export default Recrutement;

/*

            {!isLogged && (
                <Redirect push to="/" />
            )}

*/