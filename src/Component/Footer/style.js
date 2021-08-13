import styled from "styled-components"

export const FooterLayout = styled.div`
 width: 100vw;
 height: fit-content;
 min-height: 30%;
 bottom: 0;
 top: 0;
 background: #23242A;
 overflow: hidden;

 h1{
  font-family: 'Sarina', cursive;
  line-height: 30px;
  font-size: 2.3rem;
  color: white;
  font-weight: bold;
  margin-left: 13px;
  @media (max-width: 768px){
   font-size: 1.5rem;
  }
 }

 h3{
  font-size: 1.2rem;
  font-weight: bold;
  @media (max-width: 768px){
   font-size: 1rem;
  }
 }
  
`