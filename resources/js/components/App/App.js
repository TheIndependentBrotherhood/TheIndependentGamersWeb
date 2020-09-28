import React, { useState, useEffect } from 'react';
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
import Register from '../Register';
import Mentions from '../Mentions';
import Cookies from '../CookiesBar';
import Traveau from '../Traveau';
import Error404 from '../Error404';

const App = () => {

  const [isLogged, setIsLogged] = useState(false);

  const cookiesOk = localStorage.getItem('cookiesOk');

  const checkLogged = () => {
    if (localStorage.isLogged === 'true'){
      return setIsLogged(true);
    }
    setIsLogged(false)
  }

  useEffect(() => {
    checkLogged();
  }, []);

  return (
      <Router>
        <Header isLogged={isLogged} />
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
            <Login isLogged={isLogged} />
          </Route>
          <Route  path="/inscription">
            <Register isLogged={isLogged} />
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
