import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {BalanceContext} from '../Context/BalanceContext'

export const CreateTransaction = () => {
  const [text,setText] = useState('')
  const [amount,setAmount] = useState(0)
  const [income,setIncome] = useState(true)

  const {addTransaction} = useContext(BalanceContext)
  const handleSubmit = e => {
    e.preventDefault()
    // not the best method to create ID but it works for now
    const id = Math.floor(Math.random() * 100000000)
    addTransaction({id,text,amount,income})
  }
  return (
    <form onSubmit={handleSubmit}>  
    <Typography variant="h5" gutterBottom component="div" align='left'>
        Create Transaction
    </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField fullWidth label="Text" id="text" value={text} onChange={e => setText(e.target.value)}/>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth label="Amount" id="amount" type="number" value={amount} onChange={e => setAmount(e.target.value)} />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel id="income-expense-label">Income or Expense</InputLabel>
              <Select
                labelId="income-expense-label"
                id="income-expense-select"
                label="Income or Expense"
                value = {income}
                onChange = {e => setIncome(e.target.value)}
              >
                <MenuItem value={true}>Income</MenuItem>
                <MenuItem value={false}>Expense</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
          <FormControl fullWidth>
            <Button type='submit' variant="contained" >Create new Transaction</Button>
          </FormControl>
          </Grid>
        </Grid>
      </Box>
  </form>
  );
}
