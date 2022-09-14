import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
import App from './App';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Contact from './components/Contact/Contact';
import Appoint from './components/Appoint/Appoint';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>   
  <Route exact path="/" component={App} />  
  <Route exact path="/login" component={Login} />  
  <Route exact path="/signup" component={Signup} />  
  <Route exact path="/contact" component={Contact} /> 
  <Route exact path="/appoint" component={Appoint} /> 
  
  </Router>  
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

