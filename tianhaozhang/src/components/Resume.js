import React from "react";
import { Grid } from "@mui/material";
import Navbar from "./Navbar/Navbar";

export default function Resume({ mode, setMode}) {
  return (
    <Grid container>
      <Navbar mode={mode} setMode={setMode}/>
    </Grid>
  );
}
