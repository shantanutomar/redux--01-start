import * as actionTypes from "./actionTypes";

const saveRes = value => {
  // Either we can update the state here or in reducer itself
  //   var newValue = value + 9;
  return {
    type: actionTypes.STORE_RES,
    payLoad: {
      value: value
    }
  };
};

// The redux-thunk function also provided getState method as an
// argument so we can fetch something if required from state and manipulate the Data
// though it is a good practice to pass all the data as a paramter like value is being
// passed and then use it
export const storeRes = value => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(saveRes(value));
    }, 2000);
  };
};

export const delStore = value => {
  return {
    type: actionTypes.DEL_STORE,
    payLoad: {
      value: value
    }
  };
};
