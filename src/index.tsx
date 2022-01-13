import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/style.css';
import AppStateProvider from "./AppStateProvider";

ReactDOM.render(
  <React.StrictMode>
      <AppStateProvider>
        <App />
      </AppStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
