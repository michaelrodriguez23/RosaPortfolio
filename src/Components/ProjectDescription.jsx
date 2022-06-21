import React from 'react'
import styled from 'styled-components'

const ProjectCaption = styled.span`
height: 13px;
width: 206px;
font-family: Helvetica Neue;
font-size: 16px;
font-weight: 400;
line-height: 16px;
letter-spacing: -0.04em;
align-self: flex-start;

`



function ProjectDescription(props){
  return (
    <div>
        <ProjectCaption>Project Description Text</ProjectCaption>
    </div>
  )
}

export default ProjectDescription; 