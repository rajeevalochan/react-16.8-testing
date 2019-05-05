import React from "react";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";

import reducers from "reducers";

export default ({ children, initalState = {} }) => {
  const store = createStore(
    reducers,
    initalState,
    applyMiddleware(reduxPromise)
  );
  return <Provider store={store}>{children}</Provider>;
};
