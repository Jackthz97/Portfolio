import React from 'react'
import { Box } from '@mui/system'
import { Grid } from '@mui/material'
import { Typography } from '@mui/material'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container direction={"row"} justifyContent="center" mt={5}>
      <Typography mr={30}>Logo</Typography>
      <Typography mr={5}>Tech-stack</Typography>
      <Typography mr={5}>Projects</Typography>
      <Typography mr={5}>Contact</Typography>
      <Typography mr={5}>Resume / CV</Typography>
    </Grid>
  </Box>
  )
}
