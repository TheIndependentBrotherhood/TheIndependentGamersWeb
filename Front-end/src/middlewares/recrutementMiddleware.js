/* eslint-disable camelcase */
// import api from 'src/api';
import axios from 'axios';

import { 
  ADD_NEW_POST,
  ADD_NEW_MESSAGE,
  FETCH_POST_LIST,
  FETCH_MESSAGE_LIST,
  saveMessageList,
  savePostList,
  newPostOk,
  newPostNop
} from '../actions/recrutement';

import { changeFieldLoading } from '../actions/loading';

const prod = "https://api.theindependentgamers.fr";
const develop = "http://localhost:3000"

const recrutementMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case ADD_NEW_POST: {

      const { newPostTitle, newPostContent,  } = store.getState().recrutement;
      const { token, id } = store.getState().user;

      const newPostContentBR = newPostContent.replace('\s', '\n')

      axios
      .post(`${prod}/api/posts`, {
        title: newPostTitle,
        status: 'nouveau',
        content: newPostContent,
        userId: id,
      },{
          headers: {
              'Content-Type': 'application/JSON',
              'authorization': `Bearer ${token}`,
          }
      })
      .then((response) => {
        store.dispatch(changeFieldLoading(false, 'loading'));
        store.dispatch(newPostOk(true));
        axios.get(`${prod}/api/posts`)
        .then((response) => {
          store.dispatch(savePostList(response.data.data));
        })
        .catch((error) => {
          //console.log(error);
        })
      })
      .catch((error) => {
        //console.log(error);
        store.dispatch(changeFieldLoading(false, 'loading'));
        store.dispatch(newPostNop(true));
      })

      next(action);
      break;
    }

    case FETCH_POST_LIST: {

      axios.get(`${prod}/api/posts`)
      .then((response) => {
        store.dispatch(savePostList(response.data.data));
      })
      .catch((error) => {
        //console.log(error);
      })

      next(action);
      break;
    }

    case ADD_NEW_MESSAGE: {

      const { newMessageContent, postFocusId } = store.getState().recrutement;
      const { token, id } = store.getState().user;

      axios
      .post(`${prod}/api/messages`, {
        content: newMessageContent,
        userId: id,
        postId: postFocusId,
      },{
          headers: {
              'Content-Type': 'application/JSON',
              'authorization': `Bearer ${token}`,
          }
      })
      .then((response) => {
        store.dispatch(changeFieldLoading(false, 'loading'));
        console.log(response);
        axios.get(`${prod}/api/posts`)
        .then((response) => {
          store.dispatch(savePostList(response.data.data));
        })
        .catch((error) => {
          //console.log(error);
        })
      })
      .catch((error) => {
        //console.log(error);
        store.dispatch(changeFieldLoading(false, 'loading'));
      })

      next(action);
      break;
    }

    case FETCH_MESSAGE_LIST: {

      axios.get(`${prod}/api/messages/`)
      .then((response) => {
        store.dispatch(saveMessageList(response.data.data));
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

export default recrutementMiddleware;