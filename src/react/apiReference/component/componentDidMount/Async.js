import React, { Component } from "react";

class Async extends Component {
  async componentDidMount() {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }
  render() {
    return <div>123</div>;
  }
}

export default Async;
