import { ADD_FRUIT, SELL_OUT } from '../actions/fruitActions';

const defaultState = [];

const fruitsReducer = (state = defaultState, action) => {
  Object.freeze(state)
  switch (action.type) {
    case ADD_FRUIT:
      return [...state, action.fruit]
      break;
    case SELL_OUT:
      return [];
      break;
    default:
      return state;
  }
}

export default fruitsReducer;
