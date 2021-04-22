import { CHANGE_FIELD, SAVE_USER } from '../actions/auth';

const initialState = {
    email: "",
    password: "",
    token: "",
    isLogged: false,
  };
  
  const projetReducer = (state = initialState, action = {}) => {
    switch (action.type) {

      case CHANGE_FIELD:
        return {
          ...state,
          [action.identifier]: action.newValue,
        };

      case SAVE_USER:
        return {
          ...state,
          isLogged: action.isLogged,
          token: action.token,
        };

      default: return state;
    }
  };
  
  export default projetReducer;