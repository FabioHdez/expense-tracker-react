import React from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export const Balance = () => {
  return (
    <Paper elevation = {1}>
    <Typography variant="h5" gutterBottom component="div" align='center'>
      Current Balance: $3500
    </Typography>
    </Paper>
  )
}
