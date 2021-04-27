import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import 'emoji-mart/css/emoji-mart.css'
import Loader from '../../Loader'

import { useParams } from 'react-router-dom';

import { getPostBySlug, GetFormattedDate } from '../../../utils';

import './postcandidature.scss'

const PostCandidature = ({ listPost, loadingRecrutement, isLogged, newMessageContent, changeField, addNewMessage, fetchPostList }) => {

    const { slug } = useParams();

    const post = getPostBySlug(listPost, slug);

    const handleOnchange = (evt) => {
        evt.preventDefault();
        changeField(evt.target.value, 'newMessageContent');
    }

    const handleClick = (evt) => {
        evt.preventDefault();
        addNewMessage();
    }

    useEffect(() => {
        fetchPostList();
    }, []);

    return(

        <>
        {loadingRecrutement && <Loader />}

            {!loadingRecrutement && (

                <main className="postcandidature">

                    <div className="postcandidature-container container">

                        <div className="postcandidature-head">

                            <div className="postcandidature-header">
                                <img className="postcandidature-img" id="logo" src="https://www.theindependentgamers.fr/images/logo.png" alt="logo" />
                                <h1 className="postcandidature-title">Intégrer les Independent Gamers</h1>
                            </div>

                        </div>
                        
                        <NavLink className="postcandidature-retour" to="/recrutement">{`<- Retour`}</NavLink>

                        <section className="postcandidature-content">

                            <h2>{post.title}</h2>

                            <div className="postcandidature-content-header">
                                <div className="postcandidature-content-info">
                                    <p className="postcandidature-content-status">{post.status}</p>
                                    <p className="postcandidature-content-author">De {post.User.name}</p>
                                </div>
                                <p className="postcandidature-content-date">Le {GetFormattedDate(post.createdAt)}</p>
                            </div>

                            <div className="postcandidature-response">
                                <p>{post.content}</p>
                            </div>
                            <div className="postcandidature-reponse">
                                <a className="postcandidature-reponse-link" href="#postcandidature-textarea">
                                    Répondre
                                </a>
                            </div>

                            {post.Messages.map((message) => (
                                <div className="postcandidature-coment">
                                    <h3 className="postcandidature-coment-auteur">Réponse de {message.User.name}</h3>
                                    <p className="postcandidature-coment-content">{message.content}</p>
                                </div>
                            ))}

                            {isLogged && (
                                <div className="postcandidature-textarea" id="postcandidature-textarea">
                                    <h4>Répondez à ce message à l'aide du champ ci-dessous :</h4>
                                    <textarea onChange={handleOnchange} className="form-control" rows="10" value={newMessageContent}></textarea>
                                    <button onClick={handleClick} >Envoyer</button>
                                </div>
                            )}
                            {!isLogged && (
                                <div className="postcandidature-textarea" id="postcandidature-textarea">
                                    <h4>Merci de vous <NavLink to="/connexion">connecter</NavLink> pour répondre à ce post</h4>
                                </div>
                            )}

                            {
                                changeField(post.id, "postFocusId")
                            }

                        </section>

                    </div>

                </main>
            )}
        </>
    );
};

export default PostCandidature;