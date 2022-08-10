import React, {useContext} from 'react'
import {Typography,Paper,Grid} from '@mui/material';


import { BalanceContext } from '../Context/BalanceContext';

export const Balance = () => {
  const {transactions} = useContext(BalanceContext)
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);
  return (
    <Grid container spacing={2}  justifyContent="center">
    <Grid item xs={12} md={8}>
      <Paper elevation = {4}>
      <Typography variant="h4" gutterBottom component="div" align='center'>
        Current Balance: {total < 0 ? '-':''}${Math.abs(total)}
      </Typography>
      </Paper>
    </Grid>
  </Grid>
  )
}
