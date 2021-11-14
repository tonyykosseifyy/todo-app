import styled from "styled-components";




export const AppWrapper = styled.main`
  min-height: 100vh ;
  position: relative;
`

export const AppBackgroundImage = styled.img`
  width: 100% ;
  object-fit: cover;
  min-height: 100px ;
  position: absolute ;
  top:0;
  left: 0;
  right: 0;
  /*max-height: 450px;
  
  @media (max-width: 1300px) {
    max-height: 330px;
  }*/
`

export const AppContainer = styled.section`
  position: relative;
  color: white;
  padding-top: 6vw;

`