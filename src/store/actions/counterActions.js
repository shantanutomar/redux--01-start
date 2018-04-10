import * as actionTypes from "./actionTypes";

export const incCtr = () => {
  return {
    type: actionTypes.INC_CTR
  };
};

export const decCtr = () => {
  return {
    type: actionTypes.DEC_CTR
  };
};

export const addCtr = value => {
  return {
    type: actionTypes.ADD_CTR,
    payLoad: {
      value: value
    }
  };
};

export const subCtr = value => {
  return {
    type: actionTypes.SUB_CTR,
    payLoad: {
      value: value
    }
  };
};
