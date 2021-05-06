import React from 'react';
import { NavLink } from "react-router-dom";

// ==== CSS ====

import './error404.scss';

const Error404 = () => {

document.title = `Erreur 404 - The Independent Gamers`;

  return(
    <main clasName="error404">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
                <h1 className="display-2 m-3 align-self-center bd-highlight site-heading text-center">
                  <span className="site-heading-upper">Whoops</span>
                </h1>
              <p className="mb-6">Cette page n'existe visiblement pas !</p>

              <NavLink className="retour nav nav-link active display-4 mb-3 text-center" to="/">Retour Vers la page d'accueil</NavLink>

              <img className="rounded-circle image404" src="https://media.giphy.com/media/gIfgb4RSmErc07m4n9/giphy.gif" alt="" />

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


export default Error404;

