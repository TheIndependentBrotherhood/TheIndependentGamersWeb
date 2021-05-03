import axios from 'axios';

import { 
  FETCH_LIST_JEUX,
  saveListJeux,
  UPDATE_JEU,
  DELETE_JEU,
  FETCH_LIST_MEMBRES,
  saveListMembres,
  UPDATE_MEMBRE,
  DELETE_MEMBRE,
} from '../actions/list.js';

const listMiddleware = (store) => (next) => (action) => {
  
  
  // Jeux 

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

    case UPDATE_JEU: {

      const { jeuIdUpdate, jeuNameUpdate, jeuDescriptionUpdate, jeuIsActiveUpdate } = store.getState().list;
      const { token } = store.getState().user;

      axios
      .put(`http://localhost:3000/api/jeux/${jeuIdUpdate}`, {
        name: jeuNameUpdate,
        description: jeuDescriptionUpdate,
        isActive: jeuIsActiveUpdate,
      },{
        headers: {
          'Content-Type': 'application/JSON',
          'authorization': `Bearer ${token}`,
        }
      })
      .then((response) => {
        axios.get('http://localhost:3000/api/jeux')
        .then((response) => {
          store.dispatch(saveListJeux(response.data.data));
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        })
        //console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })

      next(action);
      break;
    }

    case DELETE_JEU: {

      const { token } = store.getState().user;
      const { idJeuDelete } = store.getState().list;

      axios
      .delete(`http://localhost:3000/api/jeux/${idJeuDelete}`, {
        headers: {
          'Content-Type': 'application/JSON',
          'authorization': `Bearer ${token}`,
        }
      })
      .then((response) => {
        axios.get('http://localhost:3000/api/jeux')
        .then((response) => {
          store.dispatch(saveListJeux(response.data.data));
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        })
        //console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })

      next(action);
      break;
    }

    // Membres

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

    case UPDATE_MEMBRE: {

      const { membresIdUpdate, membreNameUpdate, membreRoleUpdate, membresIsActiveUpdate } = store.getState().list;
      const { token } = store.getState().user;

      axios
      .put(`http://localhost:3000/api/membre/${membresIdUpdate}`, {
        name: membreNameUpdate,
        role: membreRoleUpdate,
        isActive: membresIsActiveUpdate,
      },{
        headers: {
          'Content-Type': 'application/JSON',
          'authorization': `Bearer ${token}`,
        }
      })
      .then((response) => {
        axios.get('http://localhost:3000/api/membre')
        .then((response) => {
          store.dispatch(saveListMembres(response.data.data));
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        })
        //console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })

      next(action);
      break;
    }

    case DELETE_MEMBRE: {

      const { token } = store.getState().user;
      const { idMembreDelete } = store.getState().list;

      axios
      .delete(`http://localhost:3000/api/membre/${idMembreDelete}`, {
        headers: {
          'Content-Type': 'application/JSON',
          'authorization': `Bearer ${token}`,
        }
      })
      .then((response) => {
        axios.get('http://localhost:3000/api/membre')
        .then((response) => {
          store.dispatch(saveListMembres(response.data.data));
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        })
        //console.log(response);
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