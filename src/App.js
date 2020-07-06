import React from "react";

// Toast Component
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Component
import Form from "./component/Form/Form.js";

const App = () => {
  return (
    <div className="App">
      <Form />
      <ToastContainer />
    </div>
  );
};

export default App;
