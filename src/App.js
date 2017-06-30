import React from 'react';
import ReactDOM from 'react-dom';
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
  document.getElementById('greeting')
);

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>It's {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('date')
);
