import React from "react";

class Modal extends React.Component {
  state = { show: false };
  componentDidMount() {
    document.addEventListener("click", () => {
      this.setState({ show: false });
    });
  }

  handleClick = (event) => {
    this.setState({ show: true });
    event.nativeEvent.stopImmediatePropagation();
  };
  handleModalClick = (event) => {
    event.nativeEvent.stopImmediatePropagation();
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>显示</button>
        {this.state.show && (
          <div onClick={this.handleModalClick}>this is Modal</div>
        )}
      </div>
    );
  }
}

export default Modal;
