import React from "react";
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, fireEvent, screen } from "./test-utils";
import Form from "../component/Form/Form.js";

import { act } from "react-dom/test-utils";

it("Render component : 'First Name' input to be inside the form", () => {
  //render(<Form />, { initialState: { user: "Redux User" } });
  render(<Form />);
  //screen.debug(screen.getByLabelText("firstName"));
  //expect(screen.getByLabelText("firstName")).toBeInTheDocument();
  expect(screen.getByLabelText("firstName")).toBeInTheDocument();
});

it("Render component : 'Last Name' input to be inside the form", () => {
  render(<Form />);
  //expect(screen.getByText(/Last Name/i)).toBeInTheDocument();
  //screen.debug(screen.getByLabelText("lastName"));
  expect(screen.getByLabelText("lastName")).toBeInTheDocument();
});

it("Render component : 'Email' input to be inside the form", () => {
  render(<Form />);
  //expect(screen.getByText(/Email/i)).toBeInTheDocument();
  expect(screen.getByLabelText("email")).toBeInTheDocument();
});

it("Render component : 'Event' input to be inside the form", () => {
  render(<Form />);
  //expect(screen.getByText(/Event/i)).toBeInTheDocument();
  expect(screen.getByLabelText("event")).toBeInTheDocument();
});

it("Render component : 'Send' button to be inside the form", () => {
  render(<Form />);
  expect(screen.getByText(/Send/i)).toBeInTheDocument();
});

it("Test submitted button click", () => {
  render(<Form />);
  const button = screen.getByText(/Send/i);
  //const button = screen.getByRole("submit");

  screen.debug(button);

  fireEvent.click(button);

  //wrapper.getByText(/Send/i)
  //   expect(screen.getByText(/Send/i)).toBeInTheDocument();

  //   const handleSubmit = const handleSubmit = jest.fn().mockImplementation((cb) => () => cb({ test: 'test' }));
  // const wrapper = shallow(<MyForm form="test" handleSubmit={handleSubmit}   />);
  // wrapper.find('button').simulate('click');
  // expect(handleSubmit).toHaveBeenCalled();
});
