/* eslint-disable camelcase */
// import api from 'src/api';
import axios from 'axios';

import { LOG_IN, LOG_IN_CHECK, REGISTER_USER, saveUser, registerOk, registerNop } from '../actions/user';

import { changeFieldLoading } from '../actions/loading';

const loginMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case LOG_IN: {

      const { loginemail, loginpassword } = store.getState().user;

      axios
      .post('http://localhost:3000/api/auth/login', {
        email: loginemail,
        password: loginpassword,
      },{
          headers: {'Content-Type': 'application/JSON'}
      })
      .then((response) => {
        store.dispatch(saveUser(response.data.userId, response.data.token, response.data.name, response.data.email, response.data.role, response.data.isAdmin, true));
        store.dispatch(changeFieldLoading(false, 'loading'));
        localStorage.setItem('token', response.data.token);
      })
      .catch((error) => {
        console.log(error);
        store.dispatch(changeFieldLoading(false, 'loading'));
      })

      next(action);
      break;
    }

    case REGISTER_USER: {

      const { name, registeremail, registerpassword } = store.getState().user;

      axios
      .post('http://localhost:3000/api/auth/signup', {
        name: name,
        email: registeremail,
        password: registerpassword,
      },{
          headers: {'Content-Type': 'application/JSON'}
      })
      .then((response) => {
        // console.log(response);
        store.dispatch(registerOk(true));
      })
      .catch((error) => {
        // console.log(error);
        store.dispatch(registerNop(true));
      })

      next(action);
      break;
    }

    case LOG_IN_CHECK: {

      const token = localStorage.getItem('token');

      axios
      .post('http://localhost:3000/api/auth/logincheck', {
        token: token,
      },{
          headers: {'Content-Type': 'application/JSON'}
      })
      .then((response) => {
        store.dispatch(saveUser(response.data.id, token, response.data.name, response.data.email, response.data.role, response.data.isAdmin, true));
        store.dispatch(changeFieldLoading(false, 'loading'));
      })
      .catch((error) => {
        console.log(error);
        store.dispatch(changeFieldLoading(false, 'loading'));
      })

      next(action);
      break;
    }

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};

export default loginMiddleware;