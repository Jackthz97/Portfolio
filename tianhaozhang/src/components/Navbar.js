import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { Button, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Components.scss";

export default function Navbar({ mode, setMode }) {
  const [textColor, setTextColor] = useState("black");

  const handleMode = () => {
    mode === "dark" ? setMode("light") : setMode("dark");
  };

  useEffect(() => {
    mode === "dark" ? setTextColor("white") : setTextColor("black");
  }, [mode]);

  return (
    <Box className="navbar" sx={{ flexGrow: 1 }}>
      <Grid container direction={"row"} justifyContent="center" mt={4}>
        <Link to="/" style={{ textDecoration: "none", color: textColor }}>
          <Typography mr={30} className='navbar-tab' style={{ fontWeight: 600 }}>Logo</Typography>
        </Link>

        <Link
          to="/tech-stack"
          style={{ textDecoration: "none", color: textColor }}
        >
          <Typography mr={5} className='navbar-tab'style={{ fontWeight: 600 }} >Tech-stack</Typography>
        </Link>

        <Typography mr={5} className='navbar-tab' style={{ fontWeight: 600 }}>Projects</Typography>
        <Typography mr={5} className='navbar-tab' style={{ fontWeight: 600 }}>Contact</Typography>
        <Typography mr={30} className='navbar-tab' style={{ fontWeight: 600 }}>Resume / CV</Typography>
        <button onClick={handleMode}>{mode}</button>
      </Grid>
    </Box>
  );
}
