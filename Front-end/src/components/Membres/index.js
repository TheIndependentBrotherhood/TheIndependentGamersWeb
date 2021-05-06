import React from 'react';
import { Link } from "react-router-dom";

// ==== CSS ==== //
 import logo from '../../assets/images/logo.png'
 import './membres.scss'

const Membres = ({ listMembres, isAdmin}) => {

  document.title = `Membres - The Independent Gamers`;

  return(
    
    <main className="container membre">


        <div className="membre-head">
          <img className="membre-img" id="logo" src={logo} alt="logo" />
          <h1 className="membre-title">Les Membres des The Independent Gamers</h1>
        </div>
    
        <div className="membre-content">
          <div className="membre-card">
            {listMembres.map((membre) => (
              <div key={membre.id} className="membre-card-content">
                <img className="membre-card-img" src={membre.picture} alt="" />
                <p className="membre-card-role">{membre.role}</p>
                <h2 className="membre-card-name">{membre.name}</h2>
              </div>
            ))}
          </div>

          {isAdmin && (<Link to="/gestion-membres">Gérer</Link>)}


        </div>
    
    </main>
  );
};

export default Membres;