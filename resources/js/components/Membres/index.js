import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// ==== API ==== //

import {fetchMembreList, fetchStaffsList, fetchAdminsList} from './api.membre.js';

 // ==== CSS ==== //

 import './membres.scss'

const Membres = () => {

  const [Membres, setMembres] = useState([]);
  const [Staffs, setStaffs] = useState([]);
  const [Admins, setAdmins] = useState([]);

  useEffect(() => {
    fetchMembreList(setMembres);
    fetchStaffsList(setStaffs);
    fetchAdminsList(setAdmins);
  }, []);

  return(
    
    <main className="cta">

      <div className="m-3 p-5">

        <h1 className="p-5 site-heading text-center d-none d-lg-block">
          <span className="site-heading-upper text-white mb-3">Les Membres</span>
        </h1>
    
        <div className="d-flex row">

          <div className="col col-lg-3">
            {Admins.map((admin) => (
              <div key={admin.id} className="p-2 text-center">
                <img className="rounded-circle img--membre" src={`https://theindependentgamers.fr/images/membre/${admin.picture}.png`} alt="" />
                <h2 className="pb-2 text-primary">{admin.name}</h2>
              </div>
            ))}
          </div>

          <div className="col-lg-6 d-flex flex-warp row m-auto">
            {Membres.map((membre) => (
              <div key={membre.id} className="p-2 col col-lg-4 text-center">
                <img className="rounded-circle img--membre" src={`https://theindependentgamers.fr/images/membre/${membre.picture}.png`} alt="" />
                <h2 className="pb-2 text-primary">{membre.name}</h2>
              </div>
            ))}
          </div>

          <div className="col col-lg-3">
            {Staffs.map((staff) => (
              <div key={staff.id} className="p-2 text-center">
                <img className="rounded-circle img--membre" src={`https://theindependentgamers.fr/images/membre/${staff.picture}.png`} alt="" />
                <h2 className="pb-2 text-primary">{staff.name}</h2>
              </div>
            ))}  
          </div>
        </div>
        
    
      </div>
    
    </main>
  );
};

export default Membres;