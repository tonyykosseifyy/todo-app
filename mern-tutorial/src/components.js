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
`

export const AppContainer = styled.section`
  position: relative;
  color: white;
  padding-top: 50px ;
  width: 80vw ;
  max-width: 500px;
  margin: 0 auto ;
  height: 600px;
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Title = styled.h1`
  font-size: 2rem ;
  letter-spacing: 10px ;
  font-weight: bold ;
`