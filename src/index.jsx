import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss'
import App from './app/App';
import { FilmsProvider } from "./shared/FilmsContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FilmsProvider>
      <App/>
    </FilmsProvider>
  </React.StrictMode>
);
