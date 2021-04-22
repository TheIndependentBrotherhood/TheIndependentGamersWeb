import {CHANGE_FIELD, SAVE_LIST_PROJET, SAVE_FILE} from '../actions/projet';

const initialState = {
    _id: '',
    listProjet: [],
    titre: '',
    description: '',
    imageUrl: '',
    imageFile: [],
    link:'',
    status: '',
    isActive: null,
  };
  
  const projetReducer = (state = initialState, action = {}) => {
    switch (action.type) {

        case CHANGE_FIELD:
        return {
          ...state,
          [action.identifier]: action.newValue,
        };

        case SAVE_LIST_PROJET:
          return {
            ...state,
            listProjet: action.listProjet,
        };

        case SAVE_FILE:
          return {
            ...state,
            imageFile: action.imageFile,
        };

        default: return state;
    }
  };
  
  export default projetReducer;