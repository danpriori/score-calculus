import { createStore } from 'redux';
import rootReducer from '../reducers/reducers';

const initialState = {
  scores: []
}

export default createStore(
  rootReducer,
  initialState
);