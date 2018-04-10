import * as actionTypes from "../actions/actionTypes";
import updateObject from "../utility";

var initialState = {
  counter: 0
};

var RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INC_CTR:
      return updateObject(state, { counter: state.counter + 1 });

    case actionTypes.DEC_CTR:
      return updateObject(state, { counter: state.counter - 1 });
    case actionTypes.ADD_CTR:
      return updateObject(state, {
        counter: state.counter + action.payLoad.value
      });

    case actionTypes.SUB_CTR:
      return updateObject(state, {
        counter: state.counter - action.payLoad.value
      });
    default:
      return state;
  }

  // return  state;
};

export default RootReducer;
