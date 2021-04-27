import React from 'react';
import { Link, NavLink } from "react-router-dom";

import {GetFormattedDate, contCaracter, slugifyTitle} from "../../utils"

import './recrutement.scss'

const Recrutement = ({ listPost, isAdmin, changeField }) => {

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

                    {isAdmin && (
                        <div className="recrutement-new">

                            <NavLink className="recrutement-new-link" aria-current="page" to="nouvelle-candidature">Gestion</NavLink>
    
                        </div>
                    )}


                </div>

                <section className="recrutement-content">

                    {listPost.map((post) => (

                        <article className="recrutement-article">
                            <div className="recrutement-article_header">
                                <p className="recrutement-article_header_author">{post.User.name}</p>
                                <p className="recrutement-article_header_status">{post.status}</p>
                                <p className="recrutement-article_header_date">{GetFormattedDate(post.createdAt)}</p>
                            </div>
                            <div className="recrutement-article_content">
                                <h4>{post.title}</h4>
                                <p>{contCaracter(post.content)}</p>

                            </div>
                            <div className="recrutement-article_readMore">
                                <Link to={`/candidature/${slugifyTitle(post.title)}`}>Voir le poste</Link>
                            </div>
                        </article>

                    ))}

                </section>

            </div>

        </main>
    );
};

export default Recrutement;
