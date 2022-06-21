import React from 'react'
import styled from 'styled-components'; 
import ProjectDescription from 'Components/ProjectDescription'


const PortraitContainer = styled.div`
display: flex;
width:100vw;

flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 4em;
`
const PortraitCanvas = styled.div`
display: flex;
width:100vw;
gap:10em;
flex-direction: column;
justify-content:space-around;
align-items: center;
margin: auto;
  
`
const PortraitImage = styled.img`
object-fit: contain;
width:70%;
height: auto;
background-color: violet;
`





function Portrait(props) {
  return (
    <PortraitContainer data-testid="portrait-view-container">
  
      <PortraitCanvas data-testid="portrait-canvas">
  
      <PortraitImage   src={process.env.PUBLIC_URL + "/Assets/Images/placeholder.jpg" } alt={props.caption}/>
      <ProjectDescription/>
      </PortraitCanvas>
      <div data-testid="portrait-caption"> 
      <p>{props.caption}</p>
      </div>
      </PortraitContainer> 

  )
}
export default Portrait;
