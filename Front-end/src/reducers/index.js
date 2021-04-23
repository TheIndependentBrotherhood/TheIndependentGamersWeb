import { combineReducers } from 'redux';
import userReducer from './user';
import loadingReducer from './loading';
import jeuxReducer from './jeux';

const rootReducer = combineReducers({
    user: userReducer,
    loading: loadingReducer,
    jeux: jeuxReducer,
});

export default rootReducer;