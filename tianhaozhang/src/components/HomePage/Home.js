import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Audio from "../Audio";
import { Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Loading from "./Loading";
import ImageSlider from "./ImageSlider";

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
        <Loading />
      ) : (
        <Grid container direction={"column"}>
          <Navbar mode={mode} setMode={setMode} />
          {/* <Audio /> */}
          <Grid className="image-slider-container" container>
            <ImageSlider />
          </Grid>
        </Grid>
      )}
    </>
  );
}
