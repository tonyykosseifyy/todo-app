import styled from "styled-components";

//var(Very-Dark-Blue)
export const AppWrapper = styled.main`
  min-height: 100vh ;
  position: relative;
  transition: .35s ease-in-out;
  background-color: ${props => props.darkTheme ? "var(--Very-Dark-Blue)" : "var(--Very-Light-Gray)"} ;
`

export const AppBackgroundImage = styled.img`
  width: 100% ;
  object-fit: cover;
  min-height: 100px ;
  position: absolute ;
  top:0;
  left: 0;
  right: 0;
  transition: .4s ease-in-out;
  opacity: ${({ darkTheme , index}) => darkTheme ? index===2 ? "1" : "0" : index===1 ? "1" : "0"};
`

export const AppContainer = styled.section`
  position: relative;
  color: white;
  padding-top: 65px ;
  width: 80vw ;
  max-width: 500px;
  margin: 0 auto ;
  height: 600px;
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & svg {
    font-size: 2rem;
  }
`
export const Title = styled.h1`
  font-size: 2rem ;
  letter-spacing: 10px ;
  font-weight: bold ;
`