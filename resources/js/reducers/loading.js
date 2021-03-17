import {CHANGE_FIELD_LOADING} from '../actions/loading';
  
  const initialState = {
      loading: false,
    };
    
    const userReducer = (state = initialState, action = {}) => {
      switch (action.type) {
  
        case CHANGE_FIELD_LOADING:
        return {
          ...state,
          [action.identifier]: action.newValue,
        };
  
        default: return state;
      }
    };
    
    export default userReducer;