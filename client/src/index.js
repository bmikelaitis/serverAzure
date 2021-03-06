//mostly all redux commands
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reducers from "./reducers";
import { createStore, applyMiddleware } from "redux";

import App from "./components/App";

const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
