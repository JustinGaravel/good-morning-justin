import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Clock from "./components/Clock";
import Greeting from "./components/Greeting";



ReactDOM.render(
  <Greeting />,
  document.getElementById('greeting')
);

ReactDOM.render(
  <Clock />,
  document.getElementById('date')
);
