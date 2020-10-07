import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top';

 // ==== CSS ==== //

import './app.scss';

 // ==== Components ==== //

import Loader from '../Loader'; 
import Header from '../../containers/Layout/Header';
import Footer from '../Layout/Footer';
import Home from '../Home';
import Jeux from '../Jeux';
import Membres from '../Membres';
import Twitch from '../Twitch';
import Login from '../../containers/Login';
import Register from '../../containers/Register';
import Profil from '../../containers/Profil';
import Mentions from '../Mentions';
import Cookies from '../CookiesBar';
import Traveau from '../Traveau';
import Error404 from '../Error404';

const App = ({ loading, logInCheck, changeFieldLoading }) => {

  const cookiesOk = localStorage.getItem('cookiesOk');

  const CheckLogin = () => {
    changeFieldLoading(true, 'loading');
    logInCheck();
  }

  useEffect(() => {
    CheckLogin();
  }, []);

  return (
      <Router>
        <ScrollToTop>
          {loading && (
            <Loader />
          )}
          <Header />
          <Switch>
            <Route  path="/" exact>
              <Home />
            </Route>
            <Route  path="/jeux">
              <Jeux />
            </Route>
            <Route  path="/membres">
              <Membres />
            </Route>
            <Route  path="/twitch">
              <Twitch />
            </Route>
            <Route  path="/events">
              <Traveau />
            </Route>
            <Route  path="/recrutement">
              <Traveau />
            </Route>
            <Route  path="/connexion">
              <Login />
            </Route>
            <Route  path="/inscription">
              <Register />
            </Route>
            <Route  path="/profil">
              <Profil />
            </Route>
            <Route  path="/mentions-legales">
              <Mentions />
            </Route>
            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
          <Footer />
          {cookiesOk && <Cookies />}
        </ScrollToTop>
      </Router>
  );
};

export default App;