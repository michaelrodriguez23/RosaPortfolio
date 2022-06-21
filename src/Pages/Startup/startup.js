import React from "react";
import StartupAnimation from "Components/StartupAnimation";
import { StartupContainer } from "./startup.styled.js";

function StartUp(props) {
  return (
    <StartupContainer data-testid="startup-container-test">
      <StartupAnimation />
    </StartupContainer>
  );
}
export default StartUp;
