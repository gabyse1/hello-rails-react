import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

const initialState = {
  greetings: []
};

const rootReducer = (state, action) => {
  switch(action.type) {
    case 'GET_GREETINGS_SUCCESS':
      return { greetings: action.payload.greetings }
    default:
      return state;
  }
};

export default configureStore = () => {
  const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
  return store;
};