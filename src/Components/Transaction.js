import React from 'react'
import {TransactionEdit} from './TransactionEdit'

import {TableRow,TableCell} from '@mui/material';

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
