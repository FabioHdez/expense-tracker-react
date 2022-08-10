import React, {useState, useContext} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

import {BalanceContext} from '../Context/BalanceContext'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const TransactionEdit = ({transaction}) => {
    const [text,setText] = useState(transaction.text)
    const [amount,setAmount] = useState(transaction.amount)
    const [income,setIncome] = useState(transaction.income)

    const {deleteTransaction,editTransaction} = useContext(BalanceContext)


    // Modal State
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleDelete = () => deleteTransaction(transaction.id)
    const handleEdit = () => {
      const id = transaction.id
      const finalAmount = income === false ? amount * -1:amount
      editTransaction({id,text,amount:finalAmount,income})
      handleClose()
    }
  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="edit-modal-title"
        aria-describedby="edit-modal-description"
      >
        <Box sx={style}>
          <Typography id="edit-modal-title" variant="h6" component="h2">
            Edit Transaction
          </Typography>
          <Grid container spacing={2} id="edit-modal-description">
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Text"
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Amount"
                id="amount"
                type="number"
                value={Math.abs(amount)}
                onChange={(e) => setAmount(Math.abs(parseInt(e.target.value)))}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="income-expense-label">
                  Income or Expense
                </InputLabel>
                <Select
                  labelId="income-expense-label"
                  id="income-expense-select"
                  label="Income or Expense"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                >
                  <MenuItem value={true}>Income</MenuItem>
                  <MenuItem value={false}>Expense</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" color="error" fullWidth onClick={handleDelete}>
                Delete
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="outlined" fullWidth onClick={handleEdit}>
                Edit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
