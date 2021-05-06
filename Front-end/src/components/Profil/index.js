import React from 'react';
import { Redirect } from "react-router-dom";

import './profil.scss'

const Profil = ({ isLogged, name, email }) => {

    document.title = `Profil - The Independent Gamers`;

    return(
        <main className="profil container">
            {!isLogged && (
                <Redirect push to="/" />
            )}
            {isLogged && (
                <>
                    <h1 className="profil-title">Mon Profil</h1>
                    <form className="profil-from" action="">
                        <div className="profil-group">
                            <label htmlFor="exampleFormControlInput1">Pseudo</label>
                            <input value={name} type="text" className="form-control" />
                        </div>
                        <div className="profil-group">
                            <label htmlFor="exampleFormControlInput1">Adresse email</label>
                            <input value={email} type="email" className="form-control" />
                        </div>
                    </form>
                </>
            )}
        </main>
    );
};

export default Profil;
