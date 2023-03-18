import "./styles.css";
import NavBar from "./Components/NavBar.jsx";
import TextArea from "./Components/TextArea.jsx";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <>
      <NavBar title="Text-Utils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-4">
        <TextArea title=<h1>Enter Your Text</h1> />
      </div>
    </>
  );
}

export default App;
