import React from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


export const Balance = () => {
  return (
    <Grid container spacing={2}  justifyContent="center">
    <Grid item xs={12} md={8}>
      <Paper elevation = {1}>
      <Typography variant="h4" gutterBottom component="div" align='center'>
        Current Balance: $3500
      </Typography>
      </Paper>
    </Grid>
  </Grid>

  )
}
