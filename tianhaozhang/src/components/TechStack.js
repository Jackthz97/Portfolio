import React from "react";
import { Grid } from "@mui/material";
import Navbar from "./Navbar/Navbar";

export default function TechStack({ mode, setMode }) {
  return (
    <Grid>
      <Navbar mode={mode} setMode={setMode} />
    </Grid>
  );
}
