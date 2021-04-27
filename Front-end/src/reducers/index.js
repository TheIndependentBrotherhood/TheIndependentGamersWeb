import { combineReducers } from 'redux';
import userReducer from './user';
import loadingReducer from './loading';
import jeuxReducer from './jeux';
import recrutementReducer from './recrutement'

const rootReducer = combineReducers({
    user: userReducer,
    loading: loadingReducer,
    jeux: jeuxReducer,
    recrutement: recrutementReducer,
});

export default rootReducer;