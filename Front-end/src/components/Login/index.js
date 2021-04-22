import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Redirect } from 'react-router-dom';
import './login.scss';

const Home = ({ changeField, logIn, email, password, isLogged }) => {

  const handleEmail = (evt) => {
    changeField(evt.target.value, "email");
  };

  const handlePassword = (evt) => {
    changeField(evt.target.value, "password");
  };

  const submitLogIn = (evt) => {
    evt.preventDefault();
    logIn();
  } 

  return (
    <main className="Exemple">
      <div className="Exemple-content">
        <form onSubmit={submitLogIn} action="" method="post">
          <div className="form-group">
            <small id="emailHelp" className="form-text text-muted">Back-Office guillaume-sanchez.fr</small>
            <label htmlFor="exampleInputEmail1">Adresse Email</label>
            <input onChange={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Mot de Passe</label>
            <input onChange={handlePassword} type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Connexion</button>
        </form>
      </div>
    </main>
  );
}

export default Home;
