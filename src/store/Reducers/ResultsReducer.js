import * as actionTypes from "../actions/actions";

var initialState = {
  results: []
};

var RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RES:
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: action.payLoad.value
        })
      };
    case actionTypes.DEL_STORE:
      return {
        ...state,
        results: state.results.filter(ele => ele.id !== action.payLoad.value)
      };
    default:
      return state;
  }

  // return  state;
};

export default RootReducer;
