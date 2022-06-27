import React from 'react'
import styled from 'styled-components'; 
import MiniGalleryComponent from 'Components/MiniGalleryComponent'


const PortraitContainer = styled.div`
display: flex;
width:100vw;
flex-direction: column;
justify-content: center;
align-items: center;

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
margin-top: 4em;
object-fit: contain;
width:70%;
height: auto;
`
const ProjectCaption = styled.div`
display: block;
width: 100vw;
color:black;
text-align: center;
font-family: Helvetica Neue;
font-size: 16px;
align-content: center;
font-weight: 400;
line-height: 16px;
letter-spacing: -0.04em;
text-align: center;
`



function Portrait(props) {
  return (
    <PortraitContainer data-testid="portrait-view-container">
      <PortraitCanvas data-testid="portrait-canvas">
  
        <PortraitImage  src={process.env.PUBLIC_URL + "/Assets/Images/PORTRAIT DEMO 3.png" } alt={props.caption}/>
        <MiniGalleryComponent/>
  

      </PortraitCanvas>
      <ProjectCaption> <span> Caption</span> </ProjectCaption>
      </PortraitContainer> 

  )
}
export default Portrait;
