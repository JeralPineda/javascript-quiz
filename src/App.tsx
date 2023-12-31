import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Container, Stack, Typography } from '@mui/material';
import { JavaScriptLogo } from './JavaScriptLogo';
import { Start } from './Start';

function App() {
  return (
    <main>
      <Container maxWidth="sm">
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="center"
        >
          <JavaScriptLogo />
          <Typography variant="h2" component="h1">
            JavaScript Quizz
          </Typography>
        </Stack>

        <Start />
      </Container>
    </main>
  );
}

export default App;
