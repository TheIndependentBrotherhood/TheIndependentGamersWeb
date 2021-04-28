import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import Loader from '../../Loader'
import ReCAPTCHA from 'react-google-recaptcha';

import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

import { useParams } from 'react-router-dom';

import { getPostBySlug, GetFormattedDate } from '../../../utils';

import './postcandidature.scss'

const PostCandidature = ({ listPost, loadingRecrutement, isLogged, newMessageContent, changeField, addNewMessage, fetchPostList, userName }) => {

    const [verif, setVerif] = useState(false);
    const [contentOk, setContentOk] = useState(false);

    const handleReCAPTCHA = (evt) => {
        if(verif === true){
            setVerif(false);
        };
        setVerif(true);
    };

    const { slug } = useParams();

    const post = getPostBySlug(listPost, slug);

    const handleOnchange = (evt) => {
        evt.preventDefault();
        changeField(evt.target.value, 'newMessageContent');
    };

    const handleClick = (evt) => {
        evt.preventDefault();
        if(newMessageContent != ''){
            addNewMessage();
            setContentOk(false)
        } else{
            setContentOk(true)
        }
    };

    const handleEmojiAdd = (evt) => {
        let textarea = document.getElementById('postcandidature-textarea')
        const value = textarea.value = newMessageContent + evt.native
        changeField(value, 'newMessageContent');
    };

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

                            <div id="coment">

                                {post.Messages.map((message) => (
                                    <div className="postcandidature-coment">
                                        <div className="postcandidature-coment-info">
                                            <h3 className="postcandidature-coment-auteur">Réponse de {message.User.name}</h3>
                                            <p>Le {GetFormattedDate(message.createdAt)}</p>
                                        </div>
                                        <p className="postcandidature-coment-content">{message.content}</p>
                                    </div>
                                ))}

                            </div>

                            {
                                changeField(post.id, "postFocusId")
                            }
                        </section>
                    </div>

                    {isLogged && (
                    <div className="postcandidature-textarea">
                        <h4>Répondez à ce message à l'aide du champ ci-dessous :</h4>
                        <div className="postcandidature-textarea-input">
                            <textarea id="postcandidature-textarea" onChange={handleOnchange} className="form-control" rows="10" value={newMessageContent}></textarea>
                            <Picker onSelect={handleEmojiAdd} />
                        </div>
                        <ReCAPTCHA
                        className="ReCAPTCHA"
                        sitekey="6Let7vEUAAAAAEyvmRWIQ-j8FN8jszkaXToHR2UB"
                        onChange={handleReCAPTCHA}
                        >
                        {contentOk && (
                            <div className="postcandidature-textarea" id="postcandidature-textarea">
                                <h4>Merci d'écrire un commentaire pour pouvoir publier</h4>
                            </div>
                        )}
                        {verif
                        && (
                            <input className="contact-send-input" type="submit" onClick={handleClick} />
                        )}
                        </ReCAPTCHA>
                    </div>
                )}
                {!isLogged && (
                    <div className="postcandidature-textarea" id="postcandidature-textarea">
                        <h4>Merci de vous <NavLink to="/connexion">connecter</NavLink> pour répondre à ce post</h4>
                    </div>
                )}
                </main>
            )}
        </>
    );
};

export default PostCandidature;