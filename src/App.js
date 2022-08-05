import './App.css';

import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import {Header} from './Components/Header'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='md'>
        <Header />
      </Container>
    </React.Fragment>
  );
}

export default App;
