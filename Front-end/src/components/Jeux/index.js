import React from 'react';
import { Link } from "react-router-dom";

 // ==== CSS ==== //
import logo from '../../assets/images/logo.png'
import './jeux.scss';

const Jeux = ({ listJeux, isAdmin }) => {
    
    return(

        <main className="jeu container">

            <div className="jeu-head">
                <img className="jeu-img" id="logo" src={logo} alt="logo" />
                <h1 className="jeu-title">Les Jeux des The Independent Gamers</h1>
            </div>
    
            <div className="jeu-content">
                <div className="jeu-card">
                    {listJeux.map((jeu) => (
                        <div key={jeu.id} className="jeu-card-content">
                            <img className="jeu-card-img" src={jeu.picture} alt={jeu.name} />
                            <h2 className="jeu-card-name">{jeu.name}</h2>
                        </div>
                    ))}
                </div>

                {isAdmin && (<Link to="/gestion-jeux">Gérer</Link>)}

            </div>

        </main>
    );
};

export default Jeux;


{/* <div className="cards">

{listJeux.map((Jeux) => ( 
    
))}

</div> */}