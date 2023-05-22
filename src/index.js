import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

import Comp2 from './components/Comp2';
import State from './components/State';
import Parent from './components/Parent';
import Parent1 from './components/Parent1';
import ChangeState from './components/ChangeState';
import ChangeState1 from './components/ChangeState1';
import ConditionalRendering from './components/ConditionalRendering';
import Get1 from "./components/Get1";
import Get from './components/Get';
import Post from './components/Post';
import Put from './components/Put';
import Delete from './components/Delete';
import FormEx from './components/FormEx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormEx />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
