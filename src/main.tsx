import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/custom.css";
import App from './App.tsx';
import "./assets/css/style-responsive.css";
import "./assets/css/animate.min.css";
import "./assets/css/vertical-rhythm.min.css";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
