import React from 'react';
import ReactDOM from 'react-dom';
import Clock from "./components/Clock";
import Greeting from "./components/Greeting";



export default class BigContainer extends React.Component {
  render() {
    return (
      <div>
        <Greeting />
        <Clock />
      </div>
    )
  }
}


ReactDOM.render(
  <BigContainer />,
  document.getElementById('app')
);
