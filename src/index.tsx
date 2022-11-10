import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
const rootElem = document.getElementById('root');
if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);
  root.render(
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </>,
  );
}
