import { combineReducers } from 'redux';
import projetReducer from './projet';
import authReducer from './auth';

const rootReducer = combineReducers({
    projet: projetReducer,
    auth: authReducer,
});

export default rootReducer;