import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import StartupAnimation from "Components/StartupAnimation";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("finds the startup component", () => {
  const animationSource = "/Images/startup.gif";

  render(<StartupAnimation value={animationSource} />);

  const StartupText = screen.getByTestId("startup-container-test");

  expect(StartupText).toBeInTheDocument();
});

it(" Should load animation", async () => {
  render(<StartupAnimation />);
  const animation = screen.getByTestId("animation-test");
  expect(animation).toBeInTheDocument();

  await userEvent.click(animation);
  // expect(enterGallery()).toHaveBeenCalled;
});
