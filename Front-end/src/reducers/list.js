import { SAVE_LIST_JEUX, SAVE_LIST_MEMBRES } from '../actions/list'; 

  const initialState = {
      listJeux: [],
      listMembres: [],
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
  
        default: return state;
      }
    };
    
    export default listReducer;