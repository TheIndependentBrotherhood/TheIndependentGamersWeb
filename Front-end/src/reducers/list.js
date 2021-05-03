import { SAVE_LIST_JEUX, SAVE_LIST_MEMBRES, CHANGE_FIELD_LIST } from '../actions/list'; 

  const initialState = {
      //Jeux
      listJeux: [],
      jeuNameUpdate: '',
      jeuDescriptionUpdate: '',
      jeuIdUpdate: '',
      jeuIsActiveUpdate: '',
      idJeuDelete: '',
      // Membres
      listMembres: [],
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

        case SAVE_LIST_MEMBRES:
          return {
            ...state,
            listMembres: action.listMembres,
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