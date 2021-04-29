import { combineReducers } from 'redux';
import userReducer from './user';
import loadingReducer from './loading';
import listReducer from './list';
import recrutementReducer from './recrutement'

const rootReducer = combineReducers({
    user: userReducer,
    loading: loadingReducer,
    list: listReducer,
    recrutement: recrutementReducer,
});

export default rootReducer;