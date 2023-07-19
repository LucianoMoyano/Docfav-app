const React = require("react");
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Asegúrate de tener esta importación

import App from "../src/App";

test("renders app", () => {
  render(<App />);
  const titleElement = screen.getByText("Juegos");
  expect(titleElement).toBeInTheDocument();
});
