import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Hello from "../component/Hello";

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

it("renders with or without a name", () => {
  act(() => {
    render(<Hello />, container);
  });
  expect(container.textContent).toBe("Cześć, nieznajomy");
});

it("renders with or without a name 2", () => {
  act(() => {
    render(<Hello name="Janusz" />, container);
  });
  expect(container.textContent).toBe("Witaj, Janusz!");
});

it("renders with or without a name 3", () => {
  act(() => {
    render(<Hello name="Grażyna" />, container);
  });
  expect(container.textContent).toBe("Witaj, Grażyna!");
});
