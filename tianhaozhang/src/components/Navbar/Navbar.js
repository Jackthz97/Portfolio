import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar({ mode, setMode, select, setSelect }) {
  const [textColor, setTextColor] = useState("black");
  let location = useLocation();

  const handleMode = () => {
    mode === "dark" ? setMode("light") : setMode("dark");
  };

  useEffect(() => {
    mode === "dark" ? setTextColor("white") : setTextColor("black");
  }, [mode]);
  return (
    <Box className="navbar-container" sx={{ flexGrow: 1 }}>
      <Grid
        className="navbar"
        container
        direction={"row"}
        justifyContent="start"
      >
        <Link to="/" style={{ textDecoration: "none", color: textColor }}>
          <Typography
            // mr={30}
            className={
              location.pathname === "/" ? "navbar-tab-selected" : "navbar-tab"
            }
            style={{ fontWeight: 600 }}
          >
            Logo
          </Typography>
        </Link>

        <Link
          to="/tech-stack"
          style={{ textDecoration: "none", color: textColor }}
        >
          <Typography
            mr={5}
            className={
              location.pathname === "/tech-stack"
                ? "navbar-tab-selected"
                : "navbar-tab"
            }
            style={{ fontWeight: 600 }}
          >
            Tech-stack
          </Typography>
        </Link>

        <Link
          to="/projects"
          style={{ textDecoration: "none", color: textColor }}
        >
          <Typography
            mr={5}
            className={
              location.pathname === "/projects"
                ? "navbar-tab-selected"
                : "navbar-tab"
            }
            style={{ fontWeight: 600 }}
          >
            Projects
          </Typography>
        </Link>

        <Link
          to="/contacts"
          style={{ textDecoration: "none", color: textColor }}
        >
          <Typography
            mr={5}
            className={
              location.pathname === "/contacts"
                ? "navbar-tab-selected"
                : "navbar-tab"
            }
            style={{ fontWeight: 600 }}
          >
            Contact
          </Typography>
        </Link>

        <Link to="/resume" style={{ textDecoration: "none", color: textColor }}>
          <Typography
            mr={30}
            className={
              location.pathname === "/resume"
                ? "navbar-tab-selected"
                : "navbar-tab"
            }
            style={{ fontWeight: 600 }}
          >
            Resume / CV
          </Typography>
        </Link>

        <button onClick={handleMode}>{mode}</button>
      </Grid>
    </Box>
  );
}
