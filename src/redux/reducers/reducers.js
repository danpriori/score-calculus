import { ADD_ITEM, REMOVE_ITEM, REMOVE_ALL_ITEM} from '../actions/actionTypes';

function rootReducer(state, action) {
  switch(action.type) {
    case ADD_ITEM:
      return {
        scores: [
          ...state.scores,
          {
            label: action.label
          }
        ]
      };
    case REMOVE_ITEM:
      return {
        scores: state.scores.forEach((score, index) => { if (index === action.label) state.scores.splice(index,1); })
      };
    case REMOVE_ALL_ITEM:
        return {
          scores: []
        };
    default:
      return state;
  };
}

export default rootReducer;