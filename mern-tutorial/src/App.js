import { useState } from "react";
import './App.css';
import Header from "./Components/Header";


function App() {
  const [ darkTheme , setDarkTheme ] = useState(false);
  const headerProps = {darkTheme , setDarkTheme};
  return (
    <div className="app">
      <Header {...headerProps} />
      <button onClick={() => setDarkTheme(!darkTheme)}>CLick me</button>
    </div>
  );
};

export default App;
