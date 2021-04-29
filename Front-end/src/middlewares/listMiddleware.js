import axios from 'axios';

import { FETCH_LIST_JEUX, saveListJeux, FETCH_LIST_MEMBRES, saveListMembres } from '../actions/list.js';

const listMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case FETCH_LIST_JEUX: {

      axios.get('http://localhost:3000/api/jeux')
      .then((response) => {
        store.dispatch(saveListJeux(response.data.data));
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })

      next(action);
      break;
    }

    case FETCH_LIST_MEMBRES: {

      axios.get('http://localhost:3000/api/membre')
      .then((response) => {
        store.dispatch(saveListMembres(response.data.data));
        // console.log(response);
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

export default listMiddleware;