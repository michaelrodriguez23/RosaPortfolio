import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Portait from "Components/Portrait";

afterEach(cleanup);

it("Should properly render a portrait size div", () => {
  render(<Portait />);
  const portraitContainer = screen.getByTestId("portrait-view-container");
  expect(portraitContainer).toBeInTheDocument();
});

it("should render a portrait div", () => {
  render(<Portait />);
  const portraitDiv = screen.getByTestId("portrait-canvas");
  expect(portraitDiv).toBeInTheDocument();
});
it("should render a portrait caption", () => {
  render(<Portait />);
  const portraitCaption = screen.getByTestId("portrait-caption");
  expect(portraitCaption).toBeInTheDocument();
});
