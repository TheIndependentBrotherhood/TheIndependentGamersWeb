import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

 // ==== CSS ==== //

import './app.scss';

 // ==== Components ==== //

import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Home from '../Home';
import Jeux from '../Jeux';
import Membres from '../Membres';
import Twitch from '../Twitch';
import Login from '../Login';
import Mentions from '../Mentions';
import Cookies from '../CookiesBar';
import Traveau from '../Traveau';
import Error404 from '../Error404';

const App = () => {

  const cookiesOk = localStorage.getItem('cookiesOk');

  return (
      <Router>
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
          <Route  path="/connection">
            <Login />
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
      </Router>
  );
};

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
};
