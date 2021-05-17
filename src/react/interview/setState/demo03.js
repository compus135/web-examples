import React, { Component } from "react";
class Test extends Component {
  btnRef = React.createRef();
  state = { count: 0 };
  handleIncrease = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };
  componentDidMount() {
    this.btnRef.current.addEventListener("click", this.handleIncrease);
  }
  render() {
    console.log("render", this.state.count);
    const { count } = this.state;
    return (
      <div>
        <h2>{count}</h2>
        <button ref={this.btnRef}> +</button>
      </div>
    );
  }
}
export default Test;
