import React from "react";

class Test extends React.Component {
  state = { flag: 0 };
  handleClick = () => {
    this.setState((preState) => ({ flag: !preState.flag }));
  };
  render() {
    const { flag } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>reset</button>
        <Child flag={flag} />
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
    prevProps.flag !== this.props.flag && this.setState({ count: 0 });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        {count}
        <button onClick={this.handleClick}>increase</button>
      </div>
    );
  }
}
export default Test;
