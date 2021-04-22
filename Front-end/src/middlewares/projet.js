import axios from 'axios';

import { FETCH_LIST_PROJET, fetchListProjet, saveListProjet, ADD_PROJET, MODIF_PROJET, DELETE_PROJET } from '../actions/projet.js';

const headers = {
  "Content-Type": "application/json"
}

const api = axios.create({
  headers: {
    'Authorization': `bearer ${localStorage.getItem('token')}`,
  },
});

// const defaultLink = "https://api.guillaume-sanchez.fr";
const defaultLink = "http://localhost:3000";

const projetMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case FETCH_LIST_PROJET: {

      axios.get(`${defaultLink}/api/projet`)
      .then((response) => {
        store.dispatch(saveListProjet(response.data));
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })

      next(action);
      break;
    }

    case ADD_PROJET: {

        const { titre, description, status, imageFile, link, isActive } = store.getState().projet;

        axios({
          method: 'post',
          url: `http://localhost:3000/api/membre`,
          data: {
            projet: {
              name: titre,
              picture: imageFile,
              role: description,
              isActive: true,
            }
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        })
  
        next(action);
        break;
    }

    case MODIF_PROJET: {

      const { _id, titre, description, status, imageUrl, link, isActive } = store.getState().projet;

      api({
        method: 'put',
        url: `${defaultLink}/api/projet/${_id}`,
        data: {
          projet: {
            titre: titre,
            description: description,
            status: status,
            imageUrl: imageUrl,
            link: link,
            isActive: isActive,
          }
        },
      })
      .then((response) => {
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })

      next(action);
      break;
  }
  case DELETE_PROJET: {

    const { _id } = store.getState().projet;

    api.delete(`${defaultLink}/api/projet/${_id}`)
    .then((response) => {
      // console.log(response.data);
      store.dispatch(fetchListProjet());
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

export default projetMiddleware;
