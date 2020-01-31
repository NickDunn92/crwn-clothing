import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(

  // BrowserRouter is a component that wraps around the application. It gives the application its warapped around the functionality of routing
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById('root')
);
