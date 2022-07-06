import React, { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import ReactHowler from "react-howler";

export default function Audio() {
  const [wooden, setWooden] = useState(false);
  const [bosun, setBosun] = useState(false);
  const handleClickWooden = () => {
    wooden ? setWooden(false) : setWooden(true);
  };
  const handleClickBosun = () => {
    bosun ? setBosun(false) : setBosun(true);
  };
  return (
    <Grid container direction={"column"} alignContent={"center"} mt={20}>
      <Typography align="center" mb={2}>Wooden Bear</Typography>
      <Button onClick={handleClickWooden}>
        {wooden ? "pause ||" : "play >"}
      </Button>
      <Typography align="center" mb={2} mt={2}>Bosun Bill</Typography>
      <Button onClick={handleClickBosun}>
        {bosun ? "pause ||" : "play >"}
      </Button>
      <ReactHowler src="wooden.mp3" playing={wooden} />
      <ReactHowler src="BosunBill.mp3" playing={bosun} />
    </Grid>
  );
}
