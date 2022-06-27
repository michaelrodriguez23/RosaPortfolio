import React from 'react'
import styled from 'styled-components'; 
import ProjectDescription from 'Components/ProjectDescription'


const LandscapeContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-content: center;
  width:100vw;
  gap:20em;
`
const LandscapeImage = styled.img`

object-fit: contain;
align-content: center;
margin-top:4em;
margin-left: auto;
margin-right: auto;
width:80%;

`




function LandscapeComponent(){
  return (

      <LandscapeContainer data-testid="landscape-view-container">

      <LandscapeImage src={process.env.PUBLIC_URL + "./Assets/Images/BEACH DEMO.jpg" } alt=""/>

      <ProjectDescription/>
      </LandscapeContainer> 


  )
}
export default LandscapeComponent;
