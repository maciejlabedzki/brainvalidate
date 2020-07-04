import React from "react";
//import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import ReduxThunk from "redux-thunk";
// import logger from "redux-logger";

// Style
// import "./styles.css";

// Component
import Form from "./component/Form/Form.js";

// Reducer
// import rootReducer from "./reducers/index.js";

// Store
// const store = createStore(rootReducer, applyMiddleware(ReduxThunk, logger));

// store.dispatch({ type: "ADD_FIRSTNAME", payload: "Micke" });
// store.dispatch({ type: "ADD_LASTNAME", payload: "SWAN" });
// store.dispatch({ type: "ADD_EMAIL", payload: "const@gmail.com" });
// store.dispatch({
//   type: "ADD_EVENT",
//   payload: { name: "Live Stream", date: "2020-01-01", time: "08:00" }
// });

// console.log("store", store.getState());

// console.clear();

// const handleStore = () => {
//   console.log(store.getState().formReducer);
// };

const App = () => {
  return (
    <div className="App">
      <Form />
    </div>
  );
};

export default App;
