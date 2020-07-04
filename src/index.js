import React from "react";
import ReactDOM from "react-dom";
import "./css/styles.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";

import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";

// Reducer
import rootReducer from "./reducers/index.js";

// Store
const store = createStore(rootReducer, applyMiddleware(ReduxThunk, logger));

const Root = ({ store, children }) => (
  <Provider store={store}>{children}</Provider>
);

ReactDOM.render(
  <React.StrictMode>
    <Root store={store}>
      <App />
    </Root>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";

// import { createStore, applyMiddleware } from "redux";
// import ReduxThunk from "redux-thunk";
// import logger from "redux-logger";

// import "./styles.css";

// // Reducer
// import rootReducer from "./reducers/index.js";

// // Store
// const store = createStore(rootReducer, applyMiddleware(ReduxThunk, logger));

// // Component
// import App from "./App";

// const Root = ({ store, children }) => (
//   <Provider store={store}>{children}</Provider>
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <Root store={store}>
//       <App />
//     </Root>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
