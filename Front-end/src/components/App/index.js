import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top';

 // ==== CSS ==== //

import './app.scss';

 // ==== Components ==== //

import Test from '../Test';
import Loader from '../Loader'; 
import Header from '../../containers/Layout/Header';
import Footer from '../Layout/Footer';
import Home from '../Home';
import Event from '../Event';
import Jeux from '../../containers/Jeux';
import JeuxGestion from '../../containers/Jeux/JeuxGestion';
import Membres from '../../containers/Membres';
import MembresGestion from '../../containers/Membres/MembresGestion';
import Twitch from '../Twitch';
import Login from '../../containers/Login';
import Register from '../../containers/Register';
import Recrutement from '../../containers/Recrutement';
import ToRead from '../Recrutement/ToRead';
import NewCandidature from '../../containers/Recrutement/NewCandidature';
import PostCandidature from '../../containers/Recrutement/PostCandidature';
import Profil from '../../containers/Profil';
import Mentions from '../Mentions';
import Cookies from '../CookiesBar';
import Traveau from '../Traveau';
import Error404 from '../Error404';

const App = ({ fetchListJeux, loading, logInCheck, changeFieldLoading, fetchPostList, fetchMessageList, fetchListMembres }) => {

  const [cookiesOk, setCookiesOk] = useState(false);

  const checkCookies = () => {

    let cookies = localStorage.getItem('cookiesOk');

    if(cookies === 'false'){
      return setCookiesOk(false)
    }
    return setCookiesOk(true);
  };

  const CheckLogin = () => {
    changeFieldLoading(true, 'loading');
    logInCheck();
  };

  useEffect(() => {
    fetchListMembres();
    fetchPostList();
    fetchMessageList();
    CheckLogin();
    checkCookies();
    fetchListJeux();
  }, []);

  return (
    <Router>
      <ScrollToTop>
        {loading && (<Loader />)}
        {!loading && (
            <>
              <Header />
                <Switch>
                  <Route  path="/" exact>
                    <Home />
                  </Route>
                  <Route  path="/jeux">
                    <Jeux />
                  </Route>
                  <Route path="/gestion-jeux">
                    <JeuxGestion />
                  </Route>
                  <Route  path="/membres">
                    <Membres />
                  </Route>
                  <Route path="/gestion-membres">
                    <MembresGestion />
                  </Route>
                  <Route  path="/twitch">
                    <Twitch />
                  </Route>
                  <Route  path="/events">
                    <Event />
                  </Route>
                  <Route  path="/recrutement">
                    <Recrutement />
                  </Route>
                  <Route  path="/recrutement-a-lire">
                    <ToRead />
                  </Route>
                  <Route  path="/nouvelle-candidature">
                    <NewCandidature />
                  </Route>
                  <Route  path="/candidature/:slug">
                    <PostCandidature />
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
            </>
            )}
          {!cookiesOk && <Cookies />}
      </ScrollToTop>
    </Router>
  );
};

export default App;