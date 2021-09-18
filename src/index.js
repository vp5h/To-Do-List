import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
// import { App } from './App';
// import Dashboard from './components/layout/auth/AuthApp';
import AppAuth from './components/layout/auth/main';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <AppAuth />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
