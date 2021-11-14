import { useState , useEffect } from "react";
import './App.css';
import bgDesktopLight from "./Assets/bg-desktop-light.jpg";
import bgDesktopDark from "./Assets/bg-desktop-dark.jpg";
import bgMobileLight from "./Assets/bg-mobile-light.jpg";
import bgMobileDark from "./Assets/bg-mobile-dark.jpg";
import { AppWrapper , AppBackgroundImage } from "./components";

function App() {
  const [ darkTheme , setDarkTheme ] = useState(false);
  const [ mobile , setMobile ] = useState(false);

  useEffect(() => {
    window.addEventListener("resize" , () => setMobile(window.innerWidth < 800))
  }, [])
  console.log(mobile);
    
  return (
    <AppWrapper>
      <AppBackgroundImage 
        src={mobile ? darkTheme ? bgMobileDark:bgMobileLight : darkTheme ? bgDesktopDark:bgDesktopLight} 
        alt="design image" 
      />
      <button onClick={() => setDarkTheme(!darkTheme)}>CLick me</button>
    </AppWrapper>
  );
};

export default App;

