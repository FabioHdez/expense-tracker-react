import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


// fix later
function createData(text, amount, income) {
    const id = Math.floor(Math.random() * 100000000)
    return { id, text, amount, income};
  }
  
  const transactions = [
    createData('Salary', 5000, true),
    createData('Rent', 1200, false),
    createData('Car Payment', 500, false),
    createData('Other Bills', 300, false),
    createData('Investment Returns', 500, true),
  ];

export const TransactionList = () => {
  return (
  <>    
    <Typography variant="h5" gutterBottom component="div" align='left'>
        Transaction list
    </Typography>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} >
        <TableHead>
          <TableRow>
            <TableCell>Text</TableCell>
            <TableCell align="left">Amount</TableCell>
            <TableCell align="left">Income or Expense</TableCell>
            <TableCell align="left" >Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow
              key={transaction.id}
            >
              <TableCell component="th" scope="transaction">
                {transaction.text}
              </TableCell>
              <TableCell align="left">${transaction.amount}</TableCell>
              <TableCell align="left">{transaction.income === true ? 'Income':'Expense'}</TableCell>
              <TableCell align="left"><Button variant="outlined">Edit</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}
