import { NUMBER_ADD, NUMBER_SUB } from "./actionTypes";

const reducerCounter = (state = 0, action) => {
  switch (action.type) {
    case NUMBER_ADD:
      return state + action.number;

    case NUMBER_SUB:
      return state - action.number;

    default:
      return state;
  }
};

export default reducerCounter;
