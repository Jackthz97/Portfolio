import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Navbar from "./components/Navbar";
import ReactHowler from 'react-howler'
import { Button } from "@mui/material";

function App() {
  const [mode, setMode] = useState("dark");
  const [audio, setAudio] = useState(true);

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const handleClick = () => {
    (audio) ? setAudio(false) : setAudio(true)
  }
  // useEffect(() => {
  //   (audio) ? setAudio(false) : setAudio(true)
  // }, [])
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Button onClick={handleClick}>{audio ? "pause ||" : "play >"}</Button>
      
      <ReactHowler
        src='wooden.mp3'
        playing={audio}
      />
    </ThemeProvider>
  );
}

export default App;
