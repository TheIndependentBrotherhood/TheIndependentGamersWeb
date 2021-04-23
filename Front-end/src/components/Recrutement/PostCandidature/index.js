import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Redirect } from "react-router-dom";
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

import './postcandidature.scss'

const PostCandidature = () => {

    return(
        <main className="postcandidature">

            <div className="postcandidature-container container">

                <div className="postcandidature-head">

                    <div className="postcandidature-header">
                        <img className="postcandidature-img" id="logo" src="https://www.theindependentgamers.fr/images/logo.png" alt="logo" />
                        <h2 className="postcandidature-title">Intégrer les Independent Gamers</h2>
                        <h2 className="postcandidature-title-sm">Intégrer les TIG</h2>
                    </div>

                </div>

                <section className="postcandidature-content">
                    <table className="postcandidature-table">
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
                                <td className="td-title">Recrutement Otto</td>
                                <td className="td-auteur">Otto</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="postcandidature-response">
                        <p>Bonjour a tous,
                        <br/>

                            Irl :

                            <br/>
                            Je me présente, je m'appelle Guillaume, j'ai 17 ans, je suis dans la région de Paris, J'aime le sport et plus particulièrement le football, J'adore évidemment les jeux vidéo je joue depuis toujours ..
                            Je suis actuellement en première ES, je suis disponible tous les jours voir même sur demande j'ai tous ce qu'il faut pour jouer en groupe, casque micro ect..

                            <br/>
                            In Game :

                            <br/>
                            Mon pseudo est ViruK Je joue à tout type de jeux, stratégie, Fps, MMO. Je suis un joueur très polyvalent.

                            <br/>
                            Je viens de chez les FsR je suis parti car la team c'est éteinte puis on recréé une nouvelle team les KTW qui c'est effondrer également, donc avec les anciens gérants des FsR nous avons décider de relancer les FsR, elle a bien marcher jusqu'à la perte de plusieurs membre qui nous laisse un nombre de membre assez restreins jusqu'à la décision de notre migration vers chez vous.
                            <br/>

                            Pour la team je pourrais apporter plus de joie et de bonne humeur Razz et si non plus sérieusement je sais très bien jouer en team play.


                            <br/>

                            Et bien voilà j'ai rien ajouter si vous voulez plus d'information demander moi Smile
                        </p>
                    </div>
                    <div className="postcandidature-reponse">
                        <a className="postcandidature-reponse-link" href="#postcandidature-textarea">
                            Répondre
                        </a>
                    </div>

                    <div className="postcandidature-coment">
                        <h3 className="postcandidature-coment-auteur">De Minipomme</h3>
                        <p className="postcandidature-coment-content">ça fait plaisir de te revoir ! Je pense qu'une réponse positive arrive bientôt, je demande l'avis d'Alcanzar, et je pense que c'est ok Wink</p>
                    </div>

                    <div className="postcandidature-textarea" id="postcandidature-textarea">
                        <h4>Répondez à ce message à l'aide du champ ci-dessous :</h4>
                        <textarea className="form-control" rows="10"></textarea>
                        <button>Envoyer</button>
                    </div>
                </section>

            </div>

        </main>
    );
};

export default PostCandidature;