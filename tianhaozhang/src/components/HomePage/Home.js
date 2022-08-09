import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Audio from "../Audio";
import { Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Loading from "./Loading";
import ImageSlider from "./ImageSlider";
import { Avatar } from "@mui/material";
import Typewriter from "typewriter-effect";

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
          <Grid container direction={"row"} className="home-info-container">
            <Avatar
              className={"fade-in"}
              alt="jack.jpg"
              src="jack.jpg"
              sx={{ width: 100, height: 100 }}
            />
            <Grid container direction={"row"} justifyContent={"center"}>

            <Typewriter
              options={{
                strings: ["Hello my name is Jack!", "I'm a full stack developer!"],
                autoStart: true,
                loop: true,
              }}
            />
            </Grid>
          </Grid>
          {/* <Audio /> */}
          {/* <Grid className="image-slider-container" container>
            <ImageSlider />
          </Grid> */}
        </Grid>
      )}
    </>
  );
}
