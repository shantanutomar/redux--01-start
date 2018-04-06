import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import ResultsReducer from "../src/store/Reducers/ResultsReducer";
import CounterReducer from "../src/store/Reducers/CounterReducer";

var RootReducer = combineReducers({
  ctr: CounterReducer,
  res: ResultsReducer
});

var store = createStore(RootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
