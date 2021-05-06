import axios from 'axios';

import { 
  FETCH_LIST_JEUX,
  FETCH_LIST_ALL_JEUX,
  saveListJeux,
  saveListAllJeux,
  UPDATE_JEU,
  DELETE_JEU,
  FETCH_LIST_MEMBRES,
  FETCH_LIST_ALL_MEMBRES,
  saveListMembres,
  saveListAllMembres,
  UPDATE_MEMBRE,
  DELETE_MEMBRE,
} from '../actions/list.js';

const prod = "https://api.theindependentgamers.fr";
const develop = "http://localhost:3000"

const listMiddleware = (store) => (next) => (action) => {
  
  
  // Jeux 

  switch (action.type) {
    case FETCH_LIST_JEUX: {

      axios.get(`${prod}/api/jeux`)
      .then((response) => {
        store.dispatch(saveListJeux(response.data.data));
        // console.log(response);
      })
      .catch((error) => {
        //console.log(error);
      })

      next(action);
      break;
    }

    case FETCH_LIST_ALL_JEUX: {

      const { token } = store.getState().user;

      axios.get(`${prod}/api/jeux/all`, {
        headers: {
          'authorization': `Bearer ${token}`,
        }
      })
      .then((response) => {
        store.dispatch(saveListAllJeux(response.data.data));
        // console.log(response);
      })
      .catch((error) => {
        //console.log(error);
      })

      next(action);
      break;
    }

    case UPDATE_JEU: {

      const { jeuIdUpdate, jeuNameUpdate, jeuDescriptionUpdate, jeuIsActiveUpdate } = store.getState().list;
      const { token } = store.getState().user;

      axios
      .put(`${prod}/api/jeux/${jeuIdUpdate}`, {
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
        axios.get(`${prod}/api/jeux`)
        .then((response) => {
          store.dispatch(saveListJeux(response.data.data));
          // console.log(response);
        })
        .catch((error) => {
          //console.log(error);
        })
        axios.get(`${prod}/api/jeux/all`, {
          headers: {
            'authorization': `Bearer ${token}`,
          }
        })
        .then((response) => {
          store.dispatch(saveListAllJeux(response.data.data));
          // console.log(response);
        })
        .catch((error) => {
          //console.log(error);
        })
        //console.log(response);
      })
      .catch((error) => {
        //console.log(error);
      })

      next(action);
      break;
    }

    case DELETE_JEU: {

      const { token } = store.getState().user;
      const { idJeuDelete } = store.getState().list;

      axios
      .delete(`${prod}/api/jeux/${idJeuDelete}`, {
        headers: {
          'Content-Type': 'application/JSON',
          'authorization': `Bearer ${token}`,
        }
      })
      .then((response) => {
        axios.get(`${prod}/api/jeux`)
        .then((response) => {
          store.dispatch(saveListJeux(response.data.data));
          // console.log(response);
        })
        .catch((error) => {
          //console.log(error);
        })
        axios.get(`${prod}/api/jeux/all`, {
          headers: {
            'authorization': `Bearer ${token}`,
          }
        })
        .then((response) => {
          store.dispatch(saveListAllJeux(response.data.data));
          // console.log(response);
        })
        .catch((error) => {
          //console.log(error);
        })
        //console.log(response);
      })
      .catch((error) => {
        //console.log(error);
      })

      next(action);
      break;
    }

    // Membres

    case FETCH_LIST_MEMBRES: {

      axios.get(`${prod}/api/membre`)
      .then((response) => {
        store.dispatch(saveListMembres(response.data.data));
        // console.log(response);
      })
      .catch((error) => {
        //console.log(error);
      })

      next(action);
      break;
    }

    case FETCH_LIST_ALL_MEMBRES: {

      const { token } = store.getState().user;

      axios.get(`${prod}/api/membre/all`, {
        headers: {
          'authorization': `Bearer ${token}`,
        }
      })
      .then((response) => {
        store.dispatch(saveListAllMembres(response.data.data));
        // console.log(response);
      })
      .catch((error) => {
        //console.log(error);
      })

      next(action);
      break;
    }

    case UPDATE_MEMBRE: {

      const { membresIdUpdate, membreNameUpdate, membreRoleUpdate, membresIsActiveUpdate } = store.getState().list;
      const { token } = store.getState().user;

      axios
      .put(`${prod}/api/membre/${membresIdUpdate}`, {
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
        axios.get(`${prod}/api/membre`)
        .then((response) => {
          store.dispatch(saveListMembres(response.data.data));
          // console.log(response);
        })
        .catch((error) => {
          //console.log(error);
        })
        axios.get(`${prod}/api/membre/all`, {
          headers: {
            'authorization': `Bearer ${token}`,
          }
        })
        .then((response) => {
          store.dispatch(saveListAllMembres(response.data.data));
          // console.log(response);
        })
        .catch((error) => {
          //console.log(error);
        })
      })
      .catch((error) => {
        //console.log(error);
      })

      next(action);
      break;
    }

    case DELETE_MEMBRE: {

      const { token } = store.getState().user;
      const { idMembreDelete } = store.getState().list;

      axios
      .delete(`${prod}/api/membre/${idMembreDelete}`, {
        headers: {
          'Content-Type': 'application/JSON',
          'authorization': `Bearer ${token}`,
        }
      })
      .then((response) => {
        axios.get(`${prod}/api/membre`)
        .then((response) => {
          store.dispatch(saveListMembres(response.data.data));
          // console.log(response);
        })
        .catch((error) => {
          //console.log(error);
        })
        axios.get(`${prod}/api/membre/all`, {
          headers: {
            'authorization': `Bearer ${token}`,
          }
        })
        .then((response) => {
          store.dispatch(saveListAllMembres(response.data.data));
          // console.log(response);
        })
        .catch((error) => {
          //console.log(error);
        })
        //console.log(response);
      })
      .catch((error) => {
        //console.log(error);
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