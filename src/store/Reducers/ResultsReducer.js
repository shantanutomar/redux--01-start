import * as actionTypes from "../actions/actionTypes";
import updateObject from "../utility";

var initialState = {
  results: []
};

var delStore = (state, action) => {
  return {
    ...state,
    results: state.results.filter(ele => ele.id !== action.payLoad.value)
  };
};

var RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RES:
      return updateObject(state, {
        results: state.results.concat({
          id: new Date(),
          // value: action.payLoad.value + 9  We can update the state here too
          value: action.payLoad.value
        })
      });

    case actionTypes.DEL_STORE:
      return delStore(state, action);
    default:
      return state;
  }

  // return  state;
};

export default RootReducer;
