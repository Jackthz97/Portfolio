import React from 'react'
import { Grid } from '@mui/material'
import Navbar from './Navbar'

export default function Projects({ mode, setMode }) {
  return (
    <Grid>
    <Navbar mode={mode} setMode={setMode} />
</Grid>
  )
}
