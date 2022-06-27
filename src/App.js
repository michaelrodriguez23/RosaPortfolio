import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React, { useState } from "react";

import { selectedProjects } from "./Data/projects";
import StartUp from "./Pages/Startup/startup.js";
import styled from "styled-components";
import Selected from "./Pages/Selected/selected.js";
import Portrait from "./Pages/Portrait/portrait";
import Landscape from "./Pages/Landscape/landscape";
import Information from "./Pages/About/about";
import { NavigationBar } from "Components/NavigationBar.jsx";
import HamburgerMenu from "Components/HamburgerMenu.jsx";

import "./App.css";
import About from "./Pages/About/about";

function App() {
  const [activePage, setActivePage] = useState("StartUp");

  const Header = styled.div`
    font-family: "Helvetica Neue";
    align-content: center;
    margin: auto;
    height: 100%;
  `;

  const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: flex-end;
    margin-left: 5em;
  `;

  return (
    <Router>
      <div className="App">
        {/*     <Route component={Selected} path="/" />
        <Route component={About} path="/about" />
        <Route component={Selected} path="/" />
        <Route component={Selected} path="/" />
        <Route component={Selected} path="/" /> */}
        <HeaderContainer>
          <Header role="header">
            <span> ROSA BONOA</span>
          </Header>
          <HamburgerMenu className="hamburgerMenu" />
        </HeaderContainer>
        {/*  <Information /> */}
        {/*         <Portrait data-testid="portrait-view-test" /> */}
        {/*   <NavigationBar />
                
           */}

        <Selected />
        {/* <StartUp />  */}
        {/*     */}
        {/*         <Landscape data-testid="portrait-view-test" />
         */}
      </div>
    </Router>
  );
}

export default App;
