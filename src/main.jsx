import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRouter } from './app/routes/AppRouter.jsx';
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
