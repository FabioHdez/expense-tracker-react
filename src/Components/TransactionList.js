import React, {useContext} from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography
} from '@mui/material';

import { Transaction } from './Transaction';
import { BalanceContext } from '../Context/BalanceContext';

export const TransactionList = () => {
  const { transactions } = useContext(BalanceContext)
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
            <Transaction key={transaction.id} transaction = {transaction}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}
