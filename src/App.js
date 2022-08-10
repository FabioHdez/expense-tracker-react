import './App.css';
import React from 'react'
import {CssBaseline,Container} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import {Header} from './Components/Header'
import {CreateTransaction} from './Components/CreateTransaction'
import {TransactionList} from './Components/TransactionList'
import { Balance } from './Components/Balance';

import {BalanceProvider} from './Context/BalanceContext'

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});


function App() {
  return (
    <ThemeProvider theme = {darkTheme}>
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
    </ThemeProvider>
  );
}

export default App;
