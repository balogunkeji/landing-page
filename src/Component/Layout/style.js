import styled from "styled-components"
import Vector from "../../assets/PNG/vector.png"
import Vectors from "../../assets/PNG/vectors.png"
export const Pagelayout = styled.div`
background-color: white;
padding-top: 100px;
overflow-x: hidden;

/* .slide{
 @media (max-width: 480px){
  width: 100%;
  flex-direction: column;
  .slides{
   padding-left: 10px;
   h1{
    font-size: 3.5rem;
    width: 100%;
   }
  }
  .space{
 word-spacing: 2;
 width: 100%;
 padding-top: 40px;
}
.anime{
 width: 100%;
}
 }
 @media screen and (min-width: 481px) and (max-width: 768px){
  width: 100%;
  flex-direction: column;
  text-align: left;
  .slides{
   padding: 0 25px;
   h1{
    font-size: 4rem;
    width: 100%;
   }
   .space{
 word-spacing: 2;
 width: 100%;
 padding-top: 40px;
}
.anime{
 max-width: 100%;
}
  }
 }
} */

/* phase2 */
/* .phase2{
 @media (max-width: 480px){
  padding: 0 50px 0 10px;
 }
} */















.container{
  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
    padding: 20px 0
  }
}



img{
 max-width: 100%;
}

.button{
 padding: 8px 15px;
 border: none;
 outline: none;
 background-color:#0E6FFF;
 color: white;
 font-size: 1.1.rem;
 min-width: 100px;
 border-radius: 4px;
 height: 50px;
}

.link{
 color: #0E6FFF;
 text-decoration: underline;
 font-size: 15px;
 font-weight: bold;
}

h2{
 font-weight: 700;
 line-height: 1;
}
.box{
 background: linear-gradient(360deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #FFF4D4;
border-radius: 40px;
height: fit-content;
margin: auto;
}

.boxs{
 position: relative;
 &:after{
  position: absolute;
  content: url(${Vector});
  top: 100px;
  right: 0;
  @media (max-width: 768px){
    display: none
  }
 }

 &:before{
  position: absolute;
  content: url(${Vectors});
  top: 100px;
  left: 0;
  @media (max-width: 768px){
    display: none
  }
 }
}


`