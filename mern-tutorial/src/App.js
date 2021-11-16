import { useState , useEffect } from "react";
import './App.css';
import bgDesktopLight from "./Assets/bg-desktop-light.jpg";
import bgDesktopDark from "./Assets/bg-desktop-dark.jpg";
import bgMobileLight from "./Assets/bg-mobile-light.jpg";
import bgMobileDark from "./Assets/bg-mobile-dark.jpg";
import { AppWrapper , AppBackgroundImage , AppContainer , Title , Flex , Todo , Input,Check} from "./components";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';

function App() {
  const [ darkTheme , setDarkTheme ] = useState(false);
  const [ mobile , setMobile ] = useState(false);
  const [ input , setInput ] = useState(""); 
  const [ checked , setChecked ] = useState(false);
  useEffect(() => {
    window.addEventListener("resize" , () => setMobile(window.innerWidth < 800))
  }, [])
  console.log(mobile);
    
  return (
    <AppWrapper darkTheme={darkTheme}>
      <AppBackgroundImage 
        darkTheme={darkTheme}
        index={1}
        src={mobile ? bgMobileLight : bgDesktopLight} 
        alt="design image" 
      />
      <AppBackgroundImage 
        index={2}
        darkTheme={darkTheme}
        src={mobile ? bgMobileDark : bgDesktopDark } 
        alt="design image" 
      />
      <AppContainer>
        <Flex>
          <Title>TODO</Title>
          <IconButton sx={{color: "white", fontSize:"2rem"}} onClick={() => setDarkTheme(!darkTheme)}>
            { darkTheme ? <LightModeIcon /> : <DarkModeIcon /> }
          </IconButton>
        </Flex>

        <Todo input darkTheme={darkTheme} > 
          <Check onClick={() => setChecked(!checked)} checked={checked}>
            <div style={{backgroundColor: darkTheme ? "transparent" : "" }} />
            {!checked ? null : <CheckIcon />}
          </Check>
          <Input placeholder="Create a new todo..." value={input} onChange={(e) => setInput(e.target.value)} darkTheme={darkTheme} />
        </Todo>
      </AppContainer>
    </AppWrapper>
  );
};

export default App;

