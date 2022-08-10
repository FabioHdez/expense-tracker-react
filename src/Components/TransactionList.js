import React, {useContext} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

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
