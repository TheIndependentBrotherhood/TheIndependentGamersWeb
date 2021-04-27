import React from 'react';

 // ==== CSS ==== //

 import './cookiesBar.scss'

const Membres = () => {

    const handleClick = () => {
        localStorage.setItem('cookiesOk', true);
    }

    return(
    <div>
        <input className="checkbox-cb" id="checkbox-cb" type="checkbox" />
        <div className="cookie-bar">
        <span className="message">Ce site utilise des cookies afin d'améliorer votre expérience et optimiser nos sites et services. Pour utiliser ce site merci de lire <a href="/mentions-legales#cookies">les Termes d'utilisation</a></span>
        <span className="mobile">Ce site utilise des cookies. <a href="/mentions-legales#cookies">En savoir plus</a></span>
        <label onClick={handleClick} htmlFor="checkbox-cb" className="close-cb">Ok</label>
        </div>
    </div>
  );
};

export default Membres;