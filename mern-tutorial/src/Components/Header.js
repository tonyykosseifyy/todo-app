import { useState , useEffect } from "react";
import "./Header.css";
import bgDesktopLight from "../Assets/bg-desktop-light.jpg";
import bgDesktopDark from "../Assets/bg-desktop-dark.jpg";
import bgMobileLight from "../Assets/bg-mobile-light.jpg";
import bgMobileDark from "../Assets/bg-mobile-dark.jpg";



const Header = ({ darkTheme , setDarkTheme }) => {
  const [ mobile , setMobile ] = useState(false);

  useEffect(() => {
    window.addEventListener("resize" , () => setMobile(window.innerWidth < 700))
  }, [])
  console.log(mobile);
  return (
    <div className='header'>
      <img 
      src={mobile ? darkTheme ? bgMobileDark:bgMobileLight : darkTheme ? bgDesktopDark:bgDesktopLight} 
      alt="design image" />
    </div>
  );
};


export default Header;