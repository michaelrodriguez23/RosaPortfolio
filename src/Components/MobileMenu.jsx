import React from 'react'
import {  Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <div>
    <ul>
        <li>
            <Link to="/"> Gallery </Link> 
            <Link to="/selected"> Selected </Link> 
            <Link to="/portraits"> Portraits </Link> 
            <Link to="/landscape"> Landscape </Link> 
            <Link to="/information"> Information </Link> 
        </li>
    </ul> 
    </div>
  )
}

export default MobileMenu