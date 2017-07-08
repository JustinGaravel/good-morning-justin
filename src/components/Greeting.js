import React from 'react';

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hour: new Date().getHours()};
  }

  render() {
    console.log(this.state.hour);

    if (20 > this.state.hour > 12) {
      return <h1>Good Morning, Justin.</h1>;
    } else if (this.state.hour < 22) {
      return <h1>Good Afternoon, Justin.</h1>;
    } else {
      return <h1>Good Night, Justin.</h1>;
    }
  }

}
