import styled from "styled-components"

export const HeaderNav = styled.div`
 width: 100vw;
 height: 5rem;
 background: linear-gradient(360deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #FFF4D4;
 position: fixed;
 z-index: 4;
 font-family:  Helvetica;
 .flex{
  padding: 20px 10px;
  @media screen and (max-width: 768px){
   position: fixed;
  }
 }

 img{
  margin-left: 10px;
  @media screen and (max-width: 480px){
   margin-left: 5px;
   width: 60px;
   height: 30px;
  }
  @media (min-width:481px) and (max-width: 768px){
   margin-left: 20px;
  }

  @media (min-width:769px) and (max-width: 998px){
   margin-left: 30px;
  }
 }
 .ul{
  .links{
   color: #D1DCE5;
   font-weight: bold;
   font-size: 1rem;
  }
  @media (min-width:769px) and (max-width: 998px){
   margin-right: 30px;
  }
 }

 .chakra-button::hover, .chakra-button::active{
  background-color: transparent;
 }
`