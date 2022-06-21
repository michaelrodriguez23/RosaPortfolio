import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "App";

it("Header Loaded", () => {
  render(<App />);
  expect(screen.getByRole("header")).toHaveTextContent("rosa noboa");
});
