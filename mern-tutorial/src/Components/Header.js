import { useState , useEffect } from "react";
import bgDesktopLight from "../Assets/bg-desktop-light.jpg";
import bgDesktopDark from "../Assets/bg-desktop-dark.jpg";
import bgMobileLight from "../Assets/bg-mobile-light.jpg";
import bgMobileDark from "../Assets/bg-mobile-dark.jpg";
import styled from "styled-components";


const Header = ({ darkTheme , setDarkTheme }) => {
  const [ mobile , setMobile ] = useState(false);

  useEffect(() => {
    window.addEventListener("resize" , () => setMobile(window.innerWidth < 700))
  }, [])
  console.log(mobile);
  return (
    <HeaderWrapper>
      <img 
      src={mobile ? darkTheme ? bgMobileDark:bgMobileLight : darkTheme ? bgDesktopDark:bgDesktopLight} 
      alt="design image" />
    </HeaderWrapper>
  );
};


export default Header;


const HeaderWrapper = styled.header`
  height: 400px;
  @media (max-width: 1300px) {
    height: 300px;
  }
  & > img {
    width: 100% ;
    height: 100%;
    object-fit: cover;
  }
`