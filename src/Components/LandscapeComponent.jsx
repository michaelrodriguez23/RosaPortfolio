import React from 'react'
import styled from 'styled-components'; 
import ProjectDescription from 'Components/ProjectDescription'


const LandscapeContainer = styled.div`
  display: flex;
`
const LandscapeImage = styled.div`
  display: flex;
height: 293px;
width: 367px;
border-radius: 0px;
background-color: lime;
`




function LandscapeComponent(){
  return (

       <LandscapeContainer data-testid="portrait-view-container">

  <ProjectDescription/>
      <LandscapeImage data-testid="portrait-canvas">
      <LandscapeImage   src={process.env.PUBLIC_URL } alt=""/>
      </LandscapeImage>
      <div data-testid="portrait-caption"> 
      <p>""</p>
      </div>



      </LandscapeContainer> 


  )
}
export default LandscapeComponent;
