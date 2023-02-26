import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import { ThemeProvider, UserProvider } from './components/utils/contexts';
import './styles/index.scss'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>
);
