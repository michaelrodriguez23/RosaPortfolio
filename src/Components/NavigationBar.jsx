import React from 'react'
import {  Link } from "react-router-dom";
import styled from 'styled-components'



const NavBar = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-decoration: none;
gap: 2em;
padding-bottom: 15em;
border: 1px solid blue;
font-family: "Helvetica Neue";
font-weight: 400;
letter-spacing: -4%;
font-size: 36px;
;

`

export const NavigationBar = () => {
  return (
    <NavBar>
        <Link to="/"> SELECTED </Link>
        <Link to="/Gallery"> GALLERY </Link>
        <Link to="/Landscape"> LANDSCAPE </Link>
        <Link to="/Portraits"> PORTRAITS </Link>
        <Link to="/Information"> INFORMATION </Link>
        </NavBar>
  )
}
