import React, { Component } from "react";
class Test extends Component {
  state = { count: 0 };
  handleIncrease = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };
  render() {
    console.log("render", this.state.count);
    const { count } = this.state;
    return (
      <div>
        <h2>{count}</h2>
        <button onClick={this.handleIncrease}> +</button>
      </div>
    );
  }
}
export default Test;
