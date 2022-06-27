import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1em;
  margin-top: 4em;
  font-family: "helvitica neue";
`
const MainBio = styled.div`
font-size: 16px;
letter-spacing: -.2px;
width: 20em;
line-height:100%;
  word-break: break;
  hyphens: manual;

`
const Contact = styled.div`
display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;
  width: 25em;

  
`

const Item = styled.div`
flex: 1 1 auto;
margin: 1em 0em;
width: 12em;
`
const Clients = styled.div`
display: flex;
flex-direction: column;
padding: 0em 6em;
margin-left: auto;

  
`
const ClientItem = styled.div`
margin: .1em 0em;
font-weight:900;

  
`
const ClientHeader = styled.span`
margin-bottom: 1em;
margin-top: -2em;

  
`

const InformationComponents = () => {
  return (
    <Wrapper>
     <MainBio> <p> Rosa Bonoa (NYC, b 1992) is a Manhattan based photographer. </p> 
      
      <p>  Who pursued fashion photography as a medium of choice for client based work. Her works explores the format of beauty, family, and lifestyle.</p> </MainBio>
     <Contact> 
     <Item><span>rosa@bonoa.com</span>  </Item>
     <Item><span>1+917-4018 4292</span>  </Item>
     <Item><span>@lavidarosalita</span>  </Item>
      </Contact>  
     <Clients> 
     <ClientHeader>CLIENTS</ClientHeader>
     <ClientItem> ADIDAS </ClientItem>
     <ClientItem> BEATS BY DRE </ClientItem>
     <ClientItem> WOODSTOCK </ClientItem>
     <ClientItem> PUMA </ClientItem>
     </Clients>  

   
        
    </Wrapper>
  )
}

export default InformationComponents