import React from 'react';
import { NavLink } from "react-router-dom";

import logo from '../../../assets/images/logo.png'

import './toread.scss'

const Reglement = () => {

    document.title = `Règlement - The Independent Gamers`;

    return(
        <main className="toread">

            <div className="toread-container container">

                <div className="toread-head">

                    <div className="toread-header">
                        <img className="toread-img" id="logo" src={logo} alt="logo" />
                        <h1 className="toread-title">Intégrer les Independent Gamers</h1>
                    </div>

                </div>

                <section className="toread-content">

                    <h2>Règlement de postulation</h2>

                    <p>Bonjour à tous les postulants, vous trouverez ici toutes les informations nécessaires pour nous présenter votre candidature.</p>

                    <h3>Introduction:</h3>

                    <p>The Independent Gamers est une team multigaming, son principal objectif est de réunir des personnes capables de former un noyau dur. A terme, nous avons comme ambitions de former une team originale sur son aspect, ainsi que de créer un véritable esprit de famille.</p>
                    <p>La motivation et la maturité sont des qualités que nous recherchons, en plus du respect et de la sympathie. Nous souhaitons nous entourer de gens ayant envie de développer la team à travers leurs capacités et leurs idées, ainsi que par leur envie de découvrir et de communiquer.</p>

                    <h3>Critères de postulation requis :</h3>
                
                    <p>Avant de postuler, vérifiez que vous pouvez remplir intégralement les critères de postulation suivant :</p>
                    <ul>
                        <li>Etre âgé de plus de 18 ans</li>
                        <li>Ne pas être recensé sur un site anti-triche.</li>
                    </ul>

                    <p>Nous rappelons tout de même qu’en postant une candidature, vous vous engagez à rejoindre une team, donc à remplir votre période de test jusqu’à la réponse finale. De plus, il est correct de ne pas présenter une candidature au même moment dans une autre team.</p>
                
                    <h3>Le déroulement :</h3>

                    <p>En tant que postulant au sein des Independent Gamers, nous attendons de vous que vous ayez pris connaissance du forum ainsi que du statut du recrutement.</p>
                    <p>La candidature se passe en 4 temps : La publication ; la réponse du corps recruteur ; si la réponse est favorable, la période de test puis la réponse finale.</p>
                    <p>A la suite de votre candidature et d’un petit délai de réflexion, vous aurez la réponse du corps recruteur. Si cette réponse est positive vous passerez en période de test, d’une durée d'une semaine minimum ; si la réponse est négative l’aventure s’arrêtera là. A la fin de votre période de test, vous aurez une réponse finale sur votre présence et votre intégration dans la team ; ainsi si votre période de test s’est révélée fructueuse, vous pourrez porter fièrement le tag =[TIG]=.</p>

                    <h3>La candidature :</h3>

                    <p>La candidature doit répondre à des critères bien spécifiques : La candidature doit être structurée, lisible et de bonne taille; toute candidature ne répondant pas aux critères ou jugée insuffisante pourra être refusée.</p>
                    <p>La candidature doit comprendre une partie IRL et une partie IG, et ces parties doivent être structurées. Ces parties doivent posséder un certains nombre d’éléments obligatoires afin de mieux connaître le postulant, les voici :</p>

                    <h4>Partie IRL :</h4>

                    <ul>
                        <li>Prénom</li>
                        <li>Age</li>
                        <li>Localisation (Région)</li>
                        <li>Profession(s) ou étude(s) réalisée(s)</li>
                        <li>Disponibilité(s)</li>
                    </ul>

                    <h4>Partie IG :</h4>

                    <ul>
                        <li>Pseudo</li>
                        <li>Votre (vos) ancienne(s) Team</li>
                        <li>La/Les raison(s) de votre/vos départ(s)</li>
                        <li>Types de jeux pratiqués</li>
                        <li>Que pensez-vous apporter à la Team</li>
                    </ul>

                    <p>N’hésitez pas à laisser libre court à votre imagination et à rajouter d’autres éléments vous présentant. Nous rajoutons tout de même que votre candidature doit faire référence à ce règlement, afin de nous indiquer que vous en avez pris connaissance.</p>

                    <div className="toread-new">

                        <NavLink className="toread-new-link" aria-current="page" to="nouvelle-candidature">Nouvelle candidature</NavLink>

                    </div>

                </section>

            </div>

        </main>
    );
};

export default Reglement;