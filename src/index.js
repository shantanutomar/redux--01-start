import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import ResultsReducer from "../src/store/Reducers/ResultsReducer";
import CounterReducer from "../src/store/Reducers/CounterReducer";
import thunk from "redux-thunk";

var RootReducer = combineReducers({
  ctr: CounterReducer,
  res: ResultsReducer
});

//This is middleware for logging purpose
var logger = store => {
  return next => {
    return action => {
      console.log("[Middleware]", action);
      var result = next(action);
      console.log("[Middleware]", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

var store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
