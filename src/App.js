import './App.css';

import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import {Header} from './Components/Header'
import {CreateTransaction} from './Components/CreateTransaction'
import {TransactionList} from './Components/TransactionList'
import { Balance } from './Components/Balance';

import {BalanceProvider} from './Context/BalanceContext'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='md'>
        <BalanceProvider>
          <Header />
          <Balance />
          <CreateTransaction />
          <br />
          <hr />
          <TransactionList />
        </BalanceProvider>
      </Container>
    </React.Fragment>
  );
}

export default App;
