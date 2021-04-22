import { createStore, applyMiddleware } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { composeWithDevTools } from 'redux-devtools-extension';

import projetMiddleware from '../middlewares/projet';
import authMiddleware from '../middlewares/auth';

import reducer from '../reducers';

const enhancers = composeWithDevTools(
    applyMiddleware(
      // ... add more middlewares
      projetMiddleware,
      authMiddleware
    ),
);

const store = createStore(
    // reducer
    reducer,
    // enhancer
    enhancers,
);
  
  export default store;