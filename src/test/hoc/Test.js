import React, { Component } from "react";
import Content from "./Content";

class Test extends Component {
  state = { visible: false };
  handleClick = () => {
    this.setState({ visible: true });
  };
  handleClose = () => {
    this.setState({ visible: false });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>click</button>
        <Content
          visible={this.state.visible}
          onClose={this.handleClose}
        ></Content>
      </div>
    );
  }
}

export default Test;
