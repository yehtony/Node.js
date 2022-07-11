// import { Router } from 'express';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter as Router} from 'react-router-dom'; //Importent: to solve multiple Router component occur in same app.
import './index.css';
// import App from './App.js';
// import Signin from './Signin';
import Login from './Login';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> {/*Important: to solve multiple Router component occur (or router inside a router) in same app. Add Router in root and remove all Router from other components*} 
      {/* <App /> */}
      {/* <Signin /> */}
      <Login />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
