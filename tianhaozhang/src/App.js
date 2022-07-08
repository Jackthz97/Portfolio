import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home mode={mode} setMode={setMode} />} />
        <Route
          path="/tech-stack"
          element={<TechStack mode={mode} setMode={setMode} />}
        />
        <Route
          path="/projects"
          element={<Projects mode={mode} setMode={setMode} />}
        />
        <Route
          path="/contacts"
          element={<Contact mode={mode} setMode={setMode} />}
        />
        <Route
          path="/resume"
          element={<Resume mode={mode} setMode={setMode} />}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
