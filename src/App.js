import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { useState } from "react";

import StartUp from "./Pages/Startup/startup.js";
import styled from "styled-components";
import Selected from "./Pages/Selected/selected.js";
import Portrait from "./Pages/Portrait/portrait";
import Landscape from "./Pages/Landscape/landscape";
import Information from "./Pages/Information/information";
import { NavigationBar } from "Components/NavigationBar.jsx";
import HamburgerMenu from "Components/HamburgerMenu.jsx";

import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("StartUp");

  const Header = styled.div`
    font-family: "Helvetica Neue";
    align-self: center;
    font-size: 16px;
    margin-top: 1em;
  `;

  const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    justify-content: space-around;
  `;
  return (
    <Router>
      <div className="App">
        <HeaderContainer>
          <Header role="header">
            <span> ROSA BONOA</span>
          </Header>
          <HamburgerMenu className="hamburgerMenu" />

          {/*   <NavigationBar />
                
           */}
        </HeaderContainer>
        {/*    <Selected /> */}
        <Portrait data-testid="portrait-view-test" />
        {/* <StartUp /> 
     
        <Portrait data-testid="portrait-view-test" />
        <Landscape data-testid="portrait-view-test" />
        <Information /> */}
      </div>
    </Router>
  );
}

export default App;
