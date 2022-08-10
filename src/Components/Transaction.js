import React from 'react'
import {TransactionEdit} from './TransactionEdit'

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';


export const Transaction = ({transaction}) => {
  return (
    <TableRow
        key={transaction.id}
        >
              <TableCell component="th" scope="transaction">
                {transaction.text}
              </TableCell>
              <TableCell align="left">{transaction.income === false ? '-':''}${Math.abs(transaction.amount)}</TableCell>
              <TableCell align="left">{transaction.income === true ? 'Income':'Expense'}</TableCell>
              <TableCell align="left"><TransactionEdit transaction = {transaction} /></TableCell>
    </TableRow>
  )
}
