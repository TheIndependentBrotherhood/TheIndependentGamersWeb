import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from "react-router-dom";

 // ==== CSS ==== //

 import './membres.scss'

const Membres = ({ userInfo }) => (
    
  <main className="cta">

    <div className="m-3 p-5">

      <h1 className="p-5 site-heading text-center d-none d-lg-block">
        <span className="site-heading-upper text-white mb-3">Les Membres</span>
      </h1>
  
      <div className="d-flex row">
        <div className="col col-lg-3">
          <div className="p-2 text-center">
            <img className="rounded-circle img--membre" src="images/membre/minipomme.png" alt="" />
            <h2 className="pb-2 text-primary">Minipomme</h2>
          </div>
          <div className="p-2 text-center">
            <img className="rounded-circle img--membre" src="images/membre/max-r.png" alt="" />
            <h2 className="pb-2 text-primary">Max.R</h2>
          </div>
        </div>

        <div className="col-lg-6 d-flex flex-warp row m-auto">
          <div className="p-2 col col-lg-4 text-center">
            <img className="rounded-circle img--membre" src="images/membre/miniviruce.png" alt="" />
            <h2 className="pb-2 text-primary">Miniviruce</h2>
          </div>
          <div className="p-2 col col-lg-4 text-center">
            <img className="rounded-circle img--membre" src="images/membre/matwands.png" alt="" />
            <h2 className="pb-2 text-primary">Matwands</h2>
          </div>
          <div className="p-2 col col-lg-4 text-center">
            <img className="rounded-circle img--membre" src="images/membre/mercenaire.png" alt="" />
            <h2 className="pb-2 text-primary">Mercenaire</h2>
          </div>
          <div className="p-2 col col-lg-4 text-center">
            <img className="rounded-circle img--membre" src="images/membre/mercenaire.png" alt="" />
            <h2 className="pb-2 text-primary">Nevlix</h2>
          </div>
          <div className="p-2 col col-lg-4 text-center">
            <img className="rounded-circle img--membre" src="images/membre/moonmoon.png" alt="" />
            <h2 className="pb-2 text-primary">Moon Moon</h2>
          </div>
          <div className="p-2 col col-lg-4 text-center">
            <img className="rounded-circle img--membre" src="images/membre/desperados.png" alt="" />
            <h2 className="pb-2 text-primary">Desperados</h2>
          </div>
          <div className="p-2 col col-lg-4 text-center">
            <img className="rounded-circle img--membre" src="images/membre/kerlliest.png" alt="" />
            <h2 className="pb-2 text-primary">Kerlliest</h2>
          </div>
          <div className="p-2 col col-lg-4 text-center">
            <img className="rounded-circle img--membre" src="images/membre/larandar.png" alt="" />
            <h2 className="pb-2 text-primary">Larandar</h2>
          </div>
          <div className="p-2 col col-lg-4 text-center">
            <img className="rounded-circle img--membre" src="images/membre/mercenaire.png" alt="" />
            <h2 className="pb-2 text-primary">GouduRisque</h2>
          </div>
        </div>

        <div className="col col-lg-3">
          <div className="p-2 text-center">
            <img className="rounded-circle img--membre" src="images/membre/todiun.png" alt="" />
            <h2 className="pb-2 text-primary">Todiun</h2>
          </div>
  
          <div className="p-2 text-center">
            <img className="rounded-circle img--membre" src="images/membre/riiwolk.png" alt="" />
            <h2 className="pb-2 text-primary">Riiwolk</h2>
          </div>
  
          <div className="p-2 text-center">
            <img className="rounded-circle img--membre" src="images/membre/nk.png" alt="" />
            <h2 className="pb-2 text-primary">Nk</h2>
          </div>
        </div>

      </div>
  
    </div>
  
  </main>
);

export default Membres;