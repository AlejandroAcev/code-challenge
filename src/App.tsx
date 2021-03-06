import React from 'react';
import './App.css';
import ThemeProvider from './components/ThemeProvider';
import Routes from './components/Routes';

function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
