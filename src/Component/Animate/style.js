import styled from "styled-components"

export const Section = styled.section`

.section-center {
  margin: 0 auto;
  margin-top: 4rem;
  min-height: 700px;
  max-width: 100%;
  text-align: center;
  position: relative;
  display: flex;
  overflow: hidden;
}

article{
 position: absolute;
  transition: .3s all linear;
  margin: auto;
  height: 800px;
  width: 700px;

 img{
   width:100%;
 min-width: 100%;
  height: 100%;
  object-fit: cover;
 }

}


.lastSlide {
  transform: translateX(-100%);
}
.nextSlide {
  transform: translateX(100%);
}


.activeSlide {
  opacity: 1;
  transform: translateX(0);
}

/* .prev,
.next {
  margin-top: 30px;
  transform: translateY(-50%);
  max-width: 20px;
  background-color: grey;
  color: black;
  width: 1.5rem;
  height: 1.5rem;
  padding: 5px;
  border-color: transparent;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: .3s all linear;
  text-align: center;
}
.prev:hover,
.next:hover {
  background: var(--clr-primary-5);
}
.prev {
  left: 0;
}
.next {
  right: 0;
} */

`
