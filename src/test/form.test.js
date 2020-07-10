import React from "react";
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, fireEvent, screen } from "./test-utils";
import Form from "../component/Form/Form.js";

it("Render component : 'First Name' input to be inside the form", () => {
  render(<Form />);
  expect(screen.getByLabelText("firstName")).toBeInTheDocument();
});

it("Render component : 'Last Name' input to be inside the form", () => {
  render(<Form />);
  expect(screen.getByLabelText("lastName")).toBeInTheDocument();
});

it("Render component : 'Email' input to be inside the form", () => {
  render(<Form />);
  expect(screen.getByLabelText("email")).toBeInTheDocument();
});

it("Render component : 'Event' input to be inside the form", () => {
  render(<Form />);
  expect(screen.getByLabelText("event")).toBeInTheDocument();
});

it("Render component : 'Submit' button to be inside the form", () => {
  render(<Form />);
  expect(screen.getByLabelText("submit-button")).toBeInTheDocument();
});

it("Test submitted button click", () => {
  render(<Form />);
  const button = screen.getByLabelText("submit-button");

  screen.debug(button);

  fireEvent.click(button);

  //   expect(screen.getByText(/Send/i)).toBeInTheDocument();

  //   const handleSubmit = const handleSubmit = jest.fn().mockImplementation((cb) => () => cb({ test: 'test' }));
  // const wrapper = shallow(<MyForm form="test" handleSubmit={handleSubmit}   />);
  // wrapper.find('button').simulate('click');
  // expect(handleSubmit).toHaveBeenCalled();
});
