import React from 'react'
import { Grid } from '@mui/material'
import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
  return (
    <Grid
          className="centered"
          container
          direction={"row"}
          justifyContent={"center"}
        >
          <CircularProgress disableShrink />
        </Grid>
  )
}
