import React from 'react';

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hour: new Date().getHours()};
  }

  render() {
    if (this.hour < 12) {
      return <h1>Good Morning, Justin.</h1>;
    }
    return <h1>Good Afternoon, Justin.</h1>;
  }
}
