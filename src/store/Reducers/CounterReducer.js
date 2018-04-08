import * as actionTypes from "../actions/actions";
var initialState = {
  counter: 0
};

var RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INC_CTR:
      return {
        ...state,
        counter: state.counter + 1
      };

    case actionTypes.DEC_CTR:
      return {
        ...state,
        counter: state.counter - 1
      };

    case actionTypes.ADD_CTR:
      return {
        ...state,
        counter: state.counter + action.payLoad.value
      };

    case actionTypes.SUB_CTR:
      return {
        ...state,
        counter: state.counter - action.payLoad.value
      };
    default:
      return state;
  }

  // return  state;
};

export default RootReducer;
