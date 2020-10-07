import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Redirect } from "react-router-dom";

import './profil.scss'

const Profil = ({ isLogged, name, email }) => {

    console.log(email);

    return(
        <main className="profil container">
            {!isLogged && (
                <Redirect push to="/" />
            )}
            {isLogged && (
                <>
                    <h1 className="profil-title">Mon Profil</h1>
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Pseudo</label>
                            <input value={name} type="text" className="form-control" />
                        </div>
                        <div className="form-group">
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
