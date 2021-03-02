import React from "react";

class Test extends React.Component {
  handleFocus = () => {
    console.log(this.count);
  };
  countWatcher = (count) => (this.count = count);
  render() {
    return (
      <div>
        <Child countWatcher={this.countWatcher}></Child>
        <button onClick={this.handleFocus}>focus</button>
      </div>
    );
  }
}
class Child extends React.Component {
  state = { count: 0 };

  handleClick = () => {
    this.setState((preState) => ({ count: preState.count + 1 }));
  };
  componentDidUpdate(prevProps, prevState) {
    const { countWatcher } = this.props;
    prevState.count !== this.state.count && countWatcher(this.state.count);
  }

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
