import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const CreateTransaction = () => {
  return (
    <>  
    <Typography variant="h5" gutterBottom component="div" align='left'>
        Create Transaction
    </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField fullWidth label="Text" id="text" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth label="Amount" id="amount" type="number" />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel id="income-expense-label">Income or Expense</InputLabel>
              <Select
                labelId="income-expense-label"
                id="income-expense-select"
                label="Income or Expense"
              >
                <MenuItem value={10}>Income</MenuItem>
                <MenuItem value={20}>Expense</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
          <FormControl fullWidth>
            <Button variant="contained">Create new Transaction</Button>
          </FormControl>
          </Grid>
        </Grid>
      </Box>
  </>
  );
}
