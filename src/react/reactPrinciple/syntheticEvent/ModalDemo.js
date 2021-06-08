import React from "react";

export default class ModalDemo extends React.Component {
  state = { show: false };
  componentDidMount() {
    document.addEventListener("click", () => {
      this.setState({ show: false });
    });
  }

  handleClick = (event) => {
    this.setState({ show: true });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>显示</button>
        {this.state.show && <div>this is Modal</div>}
      </div>
    );
  }
}
