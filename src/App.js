import React from "react";

// Toast Component
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Component
import Form from "./component/Form/Form.js";
// import AddTutorial from "./component/Tutorial/AddTutorial.js";

const App = () => {
  return (
    <div className="App">
      <Form />
      <ToastContainer />
      {/* <AddTutorial /> */}
    </div>
  );
};

export default App;
