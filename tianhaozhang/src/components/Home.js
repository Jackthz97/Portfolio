import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Audio from "./Audio";
import { Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export default function Home({ mode, setMode }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  return (
    <>
      {!loading ? (
        <Grid
          className="centered"
          container
          direction={"row"}
          justifyContent={"center"}
        >
          <CircularProgress disableShrink />
        </Grid>
      ) : (
        <Grid container display={"flex"} justifyContent={"center"}>
          <Navbar mode={mode} setMode={setMode} />
          <Audio />
        </Grid>
      )}
    </>
  );
}
