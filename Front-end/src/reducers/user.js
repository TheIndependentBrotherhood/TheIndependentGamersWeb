import {
    SAVE_USER,
    CHANGE_FIELD,
    REGISTER_OK,
    REGISTER_NOP,
  } from '../actions/user';
  
  const initialState = {
      registerNop: false,
      registerOk: false,
      name: '',
      email: '',
      password: '',
      role: '',
      api_token: null,
      loginemail: '',
      loginpassword: '',
      registeremail: '',
      registerpassword: '',
      isLogged: false,
      token: null,
    };
    
    const userReducer = (state = initialState, action = {}) => {
      switch (action.type) {
  
        case CHANGE_FIELD:
        return {
          ...state,
          [action.identifier]: action.newValue,
        };
  
        case SAVE_USER:
          return {
            ...state,
            token: action.token,
            name: action.name,
            email: action.email,
            role: action.role,
            api_token: action.api_token,
            isLogged: action.isLogged,
        };
  
        case REGISTER_OK:
          return {
            ...state,
            registerOk: action.registerOk,
        };
  
        case REGISTER_NOP:
          return {
            ...state,
            registerNop: action.registerNop,
        };
  
        default: return state;
      }
    };
    
    export default userReducer;