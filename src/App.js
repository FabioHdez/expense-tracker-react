import './App.css';

import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import {Header} from './Components/Header'
import {CreateTransaction} from './Components/CreateTransaction'
import {TransactionList} from './Components/TransactionList'
import { Balance } from './Components/Balance';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='md'>
        <Header />
        <Balance />
        <CreateTransaction />
        <br />
        <hr />
        <TransactionList />
      </Container>
    </React.Fragment>
  );
}

export default App;
