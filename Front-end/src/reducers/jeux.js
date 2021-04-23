import { SAVE_LIST_JEUX } from '../actions/list'; 

  const initialState = {
      listJeux: [],
    };
    
    const jeuxReducer = (state = initialState, action = {}) => {
      switch (action.type) {

        case SAVE_LIST_JEUX:
            return {
              ...state,
              listJeux: action.listJeux,
        };
  
        default: return state;
      }
    };
    
    export default jeuxReducer;