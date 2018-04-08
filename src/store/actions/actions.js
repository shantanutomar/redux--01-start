export const INC_CTR = "INC_CTR";
export const DEC_CTR = "DEC_CTR";
export const ADD_CTR = "ADD_CTR";
export const SUB_CTR = "SUB_CTR";
export const STORE_RES = "STORE_RES";
export const DEL_STORE = "DEL_STORE";

export const incCtr = () => {
  return {
    type: INC_CTR
  };
};

export const decCtr = () => {
  return {
    type: DEC_CTR
  };
};

export const addCtr = value => {
  return {
    type: ADD_CTR,
    payLoad: {
      value: value
    }
  };
};

export const subCtr = value => {
  return {
    type: SUB_CTR,
    payLoad: {
      value: value
    }
  };
};

export const storeRes = value => {
  return {
    type: STORE_RES,
    payLoad: {
      value: value
    }
  };
};

export const delStore = value => {
  return {
    type: DEL_STORE,
    payLoad: {
      value: value
    }
  };
};
