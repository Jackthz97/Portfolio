import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import "./Home.scss";
import { Avatar } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export default function ImageSlider() {
  const [img, setImg] = useState("");
  const image = ["image1.png", "image2.png"];

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  const recursion = async (arr) => {
    for (let i = 0; i < arr.length; i++) {
      await sleep(10000);
      setImg(arr[i]);
    }

    recursion(arr);
  };
  useEffect(() => {
    recursion(image);
  }, []);
  return (
    <Grid container direction={"column"}>
      {img === "image1.png" && (
        <>
          <img
            className={"image-slider-fadein"}
            src={"image1.png"}
            alt={"image1.png"}
          />
          <Avatar
          className={"fade-in"}
            alt="jack.jpg"
            src="jack.jpg"
            sx={{ width: 100, height: 100 }}
          />
        </>
      )}
      {img === "image2.png" && (
        <>
        <img
          className={"image-slider-fadein"}
          src={"image2.png"}
          alt={"image2.png"}
        />
        <Avatar
        className={"fade-in"}
          alt="jack.jpg"
          src="jack.jpg"
          sx={{ width: 100, height: 100 }}
        />
      </>
      )}
      {img === "" && (
        <Grid container justifyContent={"center"} mt={"10%"}>
          <CircularProgress />
        </Grid>
      )}
    </Grid>
  );
}
