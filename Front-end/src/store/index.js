import { createStore, applyMiddleware } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { composeWithDevTools } from 'redux-devtools-extension';

import userMiddleware from '../middlewares/userMiddleware';
import listMiddleware from '../middlewares/listMiddleware';

import reducer from '../reducers';

// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    userMiddleware,
    listMiddleware,
    // ... add more middlewares
  ),
);


const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;