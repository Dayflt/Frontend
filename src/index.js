import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Page_home';
import Result from './Page_result';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Home />
    <Result />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
