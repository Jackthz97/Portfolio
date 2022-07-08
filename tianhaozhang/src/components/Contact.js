import React from 'react'
import Navbar from './Navbar'
import { Grid } from '@mui/material'

export default function Contact({mode, setMode}) {
  return (
    <Grid>
      <Navbar mode={mode} setMode={setMode} />
    </Grid>
  )
}
