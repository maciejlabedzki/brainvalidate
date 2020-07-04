import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import User from "../component/user.js";

let container = null;
beforeEach(() => {
  // ustaw element DOM jako cel renderowania
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // posprzątaj po zakończeniu
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("wyświetla dane użytkownika", async () => {
  const fakeUser = {
    name: "Jan Kowalski",
    age: "32",
    address: "ul. Zimna 12, Pcim Dolny",
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser),
    })
  );

  // Użyj asynchronicznej wersji funkcji act, aby poczekać na zakończenie efektu
  await act(async () => {
    render(<User id="123" />, container);
  });

  expect(container.querySelector("summary").textContent).toBe(fakeUser.name);

  expect(container.querySelector("strong").textContent).toBe(fakeUser.age);

  expect(container.textContent).toContain(fakeUser.address);

  // usuń mock, aby zapewnić izolację testu
  global.fetch.mockRestore();
});
