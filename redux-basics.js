const redux = require("redux");
const createStore = redux.createStore;

//state
var initState = {
  counter: 0
};

//Reducer
var rootReducer = (state = initState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1
    };
  }
  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }

  return state;
};

//Store
const store = createStore(rootReducer);
console.log(store.getState());

//Subscriber
store.subscribe(() => {
  console.log("Hello", store.getState());
});

//dispatcher/Action
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
