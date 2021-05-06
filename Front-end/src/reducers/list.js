import { SAVE_LIST_JEUX, SAVE_LIST_ALL_JEUX, SAVE_LIST_MEMBRES, SAVE_LIST_ALL_MEMBRES, CHANGE_FIELD_LIST } from '../actions/list'; 

  const initialState = {
      //Jeux
      listJeux: [],
      listAllJeux: [],
      jeuNameUpdate: '',
      jeuDescriptionUpdate: '',
      jeuIdUpdate: '',
      jeuIsActiveUpdate: '',
      idJeuDelete: '',
      // Membres
      listMembres: [],
      listAllMembres: [],
      membreNameUpdate: '',
      membreRoleUpdate: '',
      membresIdUpdate: '',
      membresIsActiveUpdate: '',
      idMembreDelete: '',
    };
    
    const listReducer = (state = initialState, action = {}) => {
      switch (action.type) {

        case SAVE_LIST_JEUX:
            return {
              ...state,
              listJeux: action.listJeux,
        };

        case SAVE_LIST_ALL_JEUX:
          return {
            ...state,
            listAllJeux: action.listAllJeux,
        };

        case SAVE_LIST_MEMBRES:
          return {
            ...state,
            listMembres: action.listMembres,
        };

        case SAVE_LIST_ALL_MEMBRES:
          return {
            ...state,
            listAllMembres: action.listAllMembres,
        };

        case CHANGE_FIELD_LIST:
          return {
            ...state,
            [action.identifier]: action.newValue,
        };
  
        default: return state;
      }
    };
    
    export default listReducer;