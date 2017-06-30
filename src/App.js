import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function MorningGreeting(props) {
  return <h1>Good Morning, Justin.</h1>;
}

function AfternoonGreeting(props) {
  return <h1>Good Afternoon, Justin.</h1>;
}

function Greeting(props) {
  if (new Date().getHours() < 12) {
    return <MorningGreeting />;
  }
  return <AfternoonGreeting />;
}

ReactDOM.render(
  <Greeting />,
  document.getElementById('root')
);
