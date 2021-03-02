import React, { Component } from "react";

class Test extends Component {
  childRef = React.createRef();
  handleShowCount = () => {
    console.log(this.childRef.current.state.count);
  };
  render() {
    return (
      <div>
        <Child ref={this.childRef}></Child>
        <button onClick={this.handleShowCount}>showCount</button>
      </div>
    );
  }
}

class Child extends Component {
  state = {
    count: 0,
  };
  handleClick = () => {
    this.setState((preState) => ({ count: preState.count + 1 }));
  };
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleClick}>INCREASE</button>
      </div>
    );
  }
}

export default Test;
