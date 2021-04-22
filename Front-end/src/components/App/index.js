// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

// == Import
import './app.scss';

import Header from '../../containers/Layout/Header';
import Footer from '../Layout/Footer';
import Home from '../../containers/Home';
import Single from '../../containers/Single';
import New from '../../containers/New';
import Login from '../../containers/Login';
import Error404 from '../Error404';


const App = ({ fetchListProjet }) => {

  useEffect(() => {
    fetchListProjet();
  }, []);

  return (
    <div className="app">
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/single/:slug">
            <Header />
            <Single />
          </Route>
          <Route path="/new">
            <Header />
            <New />
          </Route>
{/*           <Route path="/login">
            <Login />
          </Route> */}
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      <Footer />
    </div>
  );
};

// == Export
export default App;
