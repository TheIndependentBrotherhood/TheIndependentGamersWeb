import React from 'react';
import { NavLink } from "react-router-dom";

// ==== CSS ====

import './traveau.scss';

const Traveau = () => (
  <main className="traveau">
    <div className="container">
      <div className="row">
        <div className="col-xl-9 mx-auto">
          <div className="cta-inner text-center rounded">
            <h1 className="display-2 m-3 align-self-center bd-highlight site-heading text-center text-white">
              <span className="site-heading-upper">Whoops</span>
            </h1>
            <p className="mb-6 text-white">Cette page est en cours de développement, merci de revenir plus tard !</p>

            <NavLink className="retour nav nav-link active display-4 m-3 text-center" to="/">Retour Vers la page d'accueil</NavLink>

            <img className="rounded-circle imagetraveau" src="https://media.giphy.com/media/3Wr5JYzWRuA2k/source.gif" alt="" />

          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Traveau;

