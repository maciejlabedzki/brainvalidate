import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

// Module Validation
import validateEmaill from "../../validation/email/Email.js";

// Date today
// import dateToday from "../../validation/date/Today.js";

// Lib: react-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Form Pattern
import formPattern from "../../data/Form/form.js";

const Form = ({ formReducer, dispatch }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [event, setEvent] = useState("");
  // const [date, setDate] = useState("2020-01-01");
  const [valid, setValid] = useState("");
  // const [error, setError] = useState("");

  useEffect(() => {
    // handleDate();
  }, []);

  // const handleDate = () => {
  //   setDate(dateToday);
  // };

  const validEmail = () => {
    if (validateEmaill(email)) {
      setValid("");
      return true;
    } else {
      setValid("novalid-email");
      toast.error("Wrong email.");
      return false;
    }
  };

  const handleUpdate = (name, value) => {
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "event") {
      setEvent(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validEmail()) {
      // Send data to reducer
      dispatch({
        type: "ADD_ALL",
        payload: { firstName, lastName, email, event },
      });

      // Send notification about send form
      toast.success("Form send.");

      // Clear form
      e.target.reset();
    }
  };

  return (
    <>
      <h3>Form:</h3>
      <form className="event-form" onSubmit={handleSubmit} validate={valid}>
        {formPattern.map((item) => {
          return (
            <div key={item.id} className="row">
              <label className="col">{item.label}:</label>
              <input
                className={"col" + item.input.name}
                name={item.input.name}
                type={item.input.type}
                value={item.input.value}
                placeholder={item.input.placeholder}
                onChange={(e) => handleUpdate(item.input.name, e.target.value)}
                required={item.input.required}
                min={item.input.min}
                max={item.input.max}
              />
            </div>
          );
        })}

        <button type="submit">Send</button>
      </form>

      <ToastContainer />
    </>
  );
};

var mapStateToProps = (state) => ({
  formReducer: state.formReducer,
});

export default connect(mapStateToProps)(Form);
