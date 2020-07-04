import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import validateEmaill from "../../validation/email/Email.js";
import dateToday from "../../validation/date/Today.js";
//import dataForm from "../../data/Form/form.js";
import { useForm } from "react-hook-form";

const Form = ({ dispatch }) => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => console.log(values);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("2020-01-01");
  const [valid, setValid] = useState(false);

  useEffect(() => {
    handleDate();
  }, []);

  const handleDate = () => {
    setDate(dateToday);
  };

  const validEmail = () => {
    if (validateEmaill(email)) {
      setValid(true);
    } else {
      setValid("Valid was wrong");
    }
  };

  const handleFirstName = e => {
    setFirstName(e.target.value);
    // console.log("  First Name");
  };

  const handleLastName = e => {
    setLastName(e.target.value);
    // console.log("  Last Name");
  };

  const handleEmail = e => {
    setEmail(e.target.value);
    // console.log("  Email");
  };

  const handleEvent = e => {
    setEmail(e.target.value);
    // console.log("  Email");
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   validEmail();

  //   if (valid === false) {
  //     console.log("App was no valid");
  //     return;
  //   }

  //   dispatch({
  //     type: "ADD_ALL",
  //     payload: { firstName, lastName, email, event: event }
  //   });
  // };

  const handleDatePicker = e => {
    console.log(e.target.value);
    setEvent(e.target.value);
  };

  const dataForm = [
    {
      id: 0,
      name: "firstName",
      label: "First Name",
      input: {
        type: "text",
        value: firstName,
        placeholder: "Name",
        onChange: handleFirstName,
        required: true
      }
    },
    {
      id: 1,
      name: "lastName",
      label: "Last Name",
      input: {
        type: "text",
        value: lastName,
        placeholder: "Surname",
        onChange: handleLastName,
        required: true
      }
    },
    {
      id: 2,
      name: "email",
      label: "Email",
      input: {
        type: "text",
        value: email,
        placeholder: "email@gmail.com",
        onChange: handleEmail,
        required: true
      }
    },
    {
      id: 3,
      name: "event",
      label: "Event",
      input: {
        type: "date",
        value: event,
        placeholder: date,
        onChange: handleDatePicker,
        required: true,
        min: date,
        max: "2020-08-08"
      }
    }
  ];

  return (
    <>
      <h3>Form:</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="email"
          ref={register({
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "invalid email address"
            }
          })}
        />
        {errors.email && errors.email.message}

        <input
          name="username"
          ref={register({
            validate: value => value !== "admin" || "Nice try!"
          })}
        />
        {errors.username && errors.username.message}

        <button type="submit">Submit</button>
      </form>

      {/* <form onSubmit={handleSubmit}>
        {dataForm.map(item => {
          return (
            <div key={item.id}>
              <label>{item.label}:</label>
              <input
                name={item.input.name}
                type={item.input.type}
                value={item.input.value}
                placeholder={item.input.placeholder}
                onChange={item.input.onChange}
                required={item.input.required}
                min={item.input.min}
                max={item.input.max}
              />
              {item.name === "email" && valid !== true && valid !== false && (
                <div className="error">Was not ok</div>
              )}
            </div>
          );
        })}
        <button type="submit">Send</button>
      </form> */}
    </>
  );
};

export default connect()(Form);
