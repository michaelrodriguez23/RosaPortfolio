import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Selected from "Components/Selected";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("Should render Container for Grid", () => {
  render(<Selected />);
  const container = screen.getByTestId("grid-container-test");
  expect(container).toBeInTheDocument();
});

it("Should Render children grid items", async () => {
  render(<Selected />);
  const galleryGridElement = screen.getByTestId("grid-item-0");
  expect(galleryGridElement).toBeInTheDocument;
  const gridDivElements = await screen.findAllByTestId(/grid-item/i);
  expect(gridDivElements.length).toBe(6);
});

// Data Should  be aggregated by project for selection page, All [selected] for Selected,
// and related to

it("Lazy Load should implememnt after first three images", () => {});
it("Grid Component Should Render", () => {});

it("Grid should render properly", () => {});
