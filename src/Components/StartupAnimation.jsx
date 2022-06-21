import React from 'react'
import styled from 'styled-components';


function StartupAnimation(props) {
  const animation = "Assets/Images/startup.gif"
  const changeActivePage = () => {
    // change component to render the gallery component

    return null;
  };
  
  const ImageContainer = styled.img`
  width: 100vw;
  height: 100vh;
`
  return (
   <div data-testid="startup-container-test"> 
     <ImageContainer alt="animation"
      data-testid="animation-test"
        onClick={changeActivePage}
        src={process.env.PUBLIC_URL + animation}
      />
    
    </div>
  )
}

export default StartupAnimation;
