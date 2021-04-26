import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Redirect } from "react-router-dom";

import './recrutement.scss'

const Recrutement = () => {

    const text = "Bonjour a tous, Je me présente, je m'appelle Guillaume, j'ai 17 ans, je suis dans la région de Paris, J'aime le sport et plus particulièrement le football, J'adore évidemment les jeux vidéo je joue depuis toujours .. Je suis actuellement en première ES, je suis disponible tous les jours voir même sur demande j'ai tous ce qu'il faut pour jouer en groupe, casque micro ect.. In Game : Mon pseudo est ViruK Je joue à tout type de jeux, stratégie, Fps, MMO. Je suis un joueur très polyvalent. Je viens de chez les FsR je suis parti car la team c'est éteinte puis on recréé une nouvelle team les KTW qui c'est effondrer également, donc avec les anciens gérants des FsR nous avons décider de relancer les FsR, elle a bien marcher jusqu'à la perte de plusieurs membre qui nous laisse un nombre de membre assez restreins jusqu'à la décision de notre migration vers chez vous. Pour la team je pourrais apporter plus de joie et de bonne humeur Razz et si non plus sérieusement je sais très bien jouer en team play. Et bien voilà j'ai rien ajouter si vous voulez plus d'information demander moi Smile"

    const contCaracter = (text) => {
        if(text.length > 255 ){
            return text.substring(0, 253) + '...' ;
        }
        return text;
    }

    return(
        <main className="recrutement">

            <div className="recrutement-container">

                <div className="recrutement-head">

                    <div className="recrutement-header">
                        <img className="recrutement-img" id="logo" src="https://www.theindependentgamers.fr/images/logo.png" alt="logo" />
                        <h1 className="recrutement-title">Intégrer les Independent Gamers</h1>
                        <h1 className="recrutement-title-sm">Intégrer les TIG</h1>
                    </div>

                    <div className="recrutement-before">
                        <h3>Merci de lire <NavLink to="/recrutement-a-lire">le Règlement de postulation</NavLink> avant de postuler</h3>
                    </div>

                    <div className="recrutement-new">

                        <NavLink className="recrutement-new-link" aria-current="page" to="nouvelle-candidature">Nouvelle candidature</NavLink>

                    </div>


                </div>

                <section className="recrutement-content">

                    <article className="recrutement-article">
                        <div className="recrutement-article_header">
                            <p className="recrutement-article_header_author">Otto</p>
                            <p className="recrutement-article_header_status">Nouvelle</p>
                            <p className="recrutement-article_header_date">26 04 2021</p>
                        </div>
                        <div className="recrutement-article_content">
                            <h4>Recrutement Otto</h4>
                            <p>{contCaracter(text)}</p>

                        </div>
                        <div className="recrutement-article_readMore">
                            <NavLink to="/">Voir le poste</NavLink>
                        </div>
                    </article>

                    <article className="recrutement-article">
                        <div className="recrutement-article_header">
                            <p className="recrutement-article_header_author">Otto</p>
                            <p className="recrutement-article_header_status">Nouvelle</p>
                            <p className="recrutement-article_header_date">26 04 2021</p>
                        </div>
                        <div className="recrutement-article_content">
                            <h4>Recrutement Otto</h4>
                            <p>{contCaracter(text)}</p>

                        </div>
                        <div className="recrutement-article_readMore">
                            <NavLink to="/">Voir le poste</NavLink>
                        </div>
                    </article>

                    <article className="recrutement-article">
                        <div className="recrutement-article_header">
                            <p className="recrutement-article_header_author">Otto</p>
                            <p className="recrutement-article_header_status">Nouvelle</p>
                            <p className="recrutement-article_header_date">26 04 2021</p>
                        </div>
                        <div className="recrutement-article_content">
                            <h4>Recrutement Otto</h4>
                            <p>{contCaracter(text)}</p>

                        </div>
                        <div className="recrutement-article_readMore">
                            <NavLink to="/">Voir le poste</NavLink>
                        </div>
                    </article>
                    <article className="recrutement-article">
                        <div className="recrutement-article_header">
                            <p className="recrutement-article_header_author">Otto</p>
                            <p className="recrutement-article_header_status">Nouvelle</p>
                            <p className="recrutement-article_header_date">26 04 2021</p>
                        </div>
                        <div className="recrutement-article_content">
                            <h4>Recrutement Otto</h4>
                            <p>{contCaracter(text)}</p>

                        </div>
                        <div className="recrutement-article_readMore">
                            <NavLink to="/">Voir le poste</NavLink>
                        </div>
                    </article>

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