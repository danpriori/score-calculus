
import store from "../store/store";
import { ADD_ITEM, REMOVE_ITEM, REMOVE_ALL_ITEM} from '../actions/actionTypes';

export function addScore(label) {
  store.dispatch({
    type: ADD_ITEM,
    label: label
  })
}

export function removeScore(label) {
  store.dispatch({
    type: REMOVE_ITEM,
    label: label
  })
}

export function removeAllScore(label) {
  store.dispatch({
    type: REMOVE_ALL_ITEM
  })
}

export function getScores() {
  return store.getState();
}
