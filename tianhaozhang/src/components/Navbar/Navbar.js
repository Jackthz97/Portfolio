import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { Nav } from "react-bootstrap";

export default function Navbar({ mode, setMode }) {
  const [textColor, setTextColor] = useState("black");

  const handleMode = () => {
    mode === "dark" ? setMode("light") : setMode("dark");
  };

  useEffect(() => {
    mode === "dark" ? setTextColor("white") : setTextColor("black");
  }, [mode]);

  return (
    // <Nav>
    //   <Grid container direction={"row"} justifyContent={"space-evenly"}>
    //     <Nav.Item >
    //       <Nav.Link href="/">home</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //       <Nav.Link href="/tech-stack">Tech-stack</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //       <Nav.Link href="/projects">Projects</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //       <Nav.Link href="/contacts">Contacts</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //       <Nav.Link href="/resume">Resume</Nav.Link>
    //     </Nav.Item>
    //   </Grid>
    // </Nav>
    <Box className="navbar-container" sx={{ flexGrow: 1 }}>
      <Grid className="navbar" container direction={"row"} justifyContent="start">
        <Link to="/" style={{ textDecoration: "none", color: textColor }}>
          <Typography
            // mr={30}
            className="navbar-tab"
            style={{ fontWeight: 600 }}
          >
            Logo
          </Typography>
        </Link>

        <Link
          to="/tech-stack"
          style={{ textDecoration: "none", color: textColor }}
        >
          <Typography mr={5} className="navbar-tab" style={{ fontWeight: 600 }}>
            Tech-stack
          </Typography>
        </Link>

        <Link
          to="/projects"
          style={{ textDecoration: "none", color: textColor }}
        >
          <Typography mr={5} className="navbar-tab" style={{ fontWeight: 600 }}>
            Projects
          </Typography>
        </Link>

        <Link
          to="/contacts"
          style={{ textDecoration: "none", color: textColor }}
        >
          <Typography mr={5} className="navbar-tab" style={{ fontWeight: 600 }}>
            Contact
          </Typography>
        </Link>

        <Link to="/resume" style={{ textDecoration: "none", color: textColor }}>
          <Typography
            mr={30}
            className="navbar-tab"
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
