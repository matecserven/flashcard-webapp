import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { compose } from 'recompose';
import rootReducer from '../reducers/index';

/* const store = createStore(() =>
  compose(
    rootReducer,
    applyMiddleware(thunk),
    composeWithDevTools(),
  ),
); */

const store = createStore(rootReducer, composeWithDevTools());

export default store;
