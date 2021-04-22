import axios from 'axios';

import { LOG_IN, saveUser } from '../actions/auth.js';

// const defaultLink = "https://api.guillaume-sanchez.fr";
const defaultLink = "http://localhost:3000";

const authMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case LOG_IN: {

        const { email , password } = store.getState().auth;

        axios({
          method: 'post',
          url: `${defaultLink}/api/auth/login`,
          data: {
              email: email,
              password: password,
          },
        })
        .then((response) => {
          // console.log(response);
          store.dispatch(saveUser(true, response.data.token));
          localStorage.setItem('token', response.data.token);
        })
        .catch((error) => {
          console.log(error);
        })
  
        next(action);
        break;
    }
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};

export default authMiddleware;
