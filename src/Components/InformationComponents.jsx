import React from 'react'
import styled from 'styled-components'

const MainBio = styled.div`
  
`
const Contact = styled.div`
  
`
const Clients = styled.div`
  
`

const InformationComponents = () => {
  return (
    <div>
     <MainBio> <p> Rosa Bonoa (NYC, b 1992) is a Manhattan based photographer. Who pursued fashion photography as a medium of choice for client based work. Her works explores the format of beauty, family, and lifestyle.</p> </MainBio>
     <Contact> Contact 
       <ul> 
         <li> email</li>
         <li> instagram handle</li>
         <li> phone number</li>
       </ul>
       </Contact>  
     <Clients> Clients
     </Clients>  
     <p> CLIENTS </p>
       <ul>
           <li>client item </li>
           <li>client item </li>
           <li>client item </li>
           </ul> 
        
    </div>
  )
}

export default InformationComponents