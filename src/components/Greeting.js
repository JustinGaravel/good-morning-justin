import React from 'react';

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hour: new Date().getHours()};
  }

  render() {

    if (this.state.hour < 8) {
      return <h1 className="leadTitle morningTitle">Great Early start! Good Morning, Justin.</h1>;
    } else if (this.state.hour < 12) {
      return <h1 className="leadTitle morningTitle">Good Morning, Justin.</h1>;
    } else if (this.state.hour < 21) {
      return <h1 className="leadTitle afternoonTitle">Good Afternoon, Justin.</h1>;
    } else {
      return <h1 className="leadTitle morningTitle">Good Night, Justin.</h1>;
    }
  }

}
