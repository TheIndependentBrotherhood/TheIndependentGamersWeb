import {CHANGE_FIELD_LOADING} from '../actions/loading';
import { SAVE_USER } from '../actions/user'
  
  const initialState = {
      loading: true,
    };
    
    const userReducer = (state = initialState, action = {}) => {
      switch (action.type) {
  
        case CHANGE_FIELD_LOADING:
        return {
          ...state,
          [action.identifier]: action.newValue,
        };

        case SAVE_USER:
        return {
          ...state,
          loading: false,
        }
  
        default: return state;
      }
    };
    
    export default userReducer;