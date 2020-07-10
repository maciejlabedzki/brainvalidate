import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import TutorialDataService from "../../services/TutorialService";

// Module Validation
import validateEmail from "../../validation/email/Email.js";

// Date today
import dateToday from "../../validation/date/Today.js";

// Lib: react-toastify
import { toast } from "react-toastify";

// Form Pattern
import formPattern from "../../data/Form/form.js";

const Form = ({ dispatch }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("2020-01-01");
  const [today, setToday] = useState("2020-01-01");
  const [valid, setValid] = useState("");
  const [submit, setSubmit] = useState(false);
  // const [error, setError] = useState("");

  useEffect(() => {
    handleDate();
  }, []);

  const handleDate = () => {
    var today = dateToday;
    setToday(today);
    setDate(today);
  };

  const validEmail = () => {
    console.log("email", email);
    if (validateEmail(email)) {
      setValid("true");
      return true;
    } else {
      setValid("novalid-email");
      toast.error("Wrong email.");
      return false;
    }
  };

  const handleUpdate = (name, value) => {
    console.log("setting setting", name, value);
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "email") {
      console.log("email setting");
      setEmail(value);
    } else if (name === "event") {
      setEvent(value);
    }
  };

  const handleReset = () => {
    console.log("CLEANING", firstName, lastName, email, event);
    setFirstName("");
    setLastName("");
    setEmail("");
    setEvent("");
    setValid("");

    console.log("AFTER  CLEANING", firstName, lastName, email, event);
    document.getElementById("form-event").reset();
  };

  const handleSample = () => {
    console.log("here");
    setFirstName("John");
    setLastName("Doe");
    setEmail("bedzki@wp.pl");
    setEvent("2020-07-07");

    document.querySelector('[aria-label="firstName"]').value = "John";
    document.querySelector('[aria-label="event"]').value = "2020-07-07";
    document.querySelector('[aria-label="lastName"]').value = "Doe";
    document.querySelector('[aria-label="email"]').value = "bedzki@wp.pl";
    setValid("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validEmail()) {
      TutorialDataService.create({ firstName, lastName, email, event })
        .then((response) => {
          dispatch({
            type: "ADD_ALL",
            payload: { firstName, lastName, email, event },
          });

          // Send notification about send form
          toast.success("Form send.");

          handleReset();
          console.log("RESPONSE DATA", response.data);
        })
        .catch((e) => {
          var message = e.toJSON().message;
          toast.error("Error: " + e.toJSON().message);
        });
    }
  };

  return (
    <React.Fragment>
      <h3 className="page-title">Form:</h3>
      {submit === false && (
        <form
          id="form-event"
          className="event-form"
          onSubmit={handleSubmit}
          validate={valid}
        >
          {formPattern.map((item) => {
            return (
              <div key={item.id} className="row">
                <label className="col title">{item.label}:</label>
                <input
                  className={"col " + item.input.name}
                  aria-label={item.input.name}
                  name={item.input.name}
                  type={item.input.type}
                  value={item.input.value}
                  placeholder={item.input.placeholder}
                  onChange={(e) =>
                    handleUpdate(item.input.name, e.target.value)
                  }
                  required={item.input.required}
                  min={date}
                  max={item.input.max}
                />
              </div>
            );
          })}

          <button
            className="button-submit"
            aria-label="submit-button"
            type="submit"
          >
            Send
          </button>
          <button className="button-reset" type="reset" onClick={handleReset}>
            Reset
          </button>
          <button className="button-reset" type="reset" onClick={handleSample}>
            Sample
          </button>
        </form>
      )}
    </React.Fragment>
  );
};

var mapStateToProps = (state) => ({
  formReducer: state.formReducer,
});

export default connect(mapStateToProps)(Form);
