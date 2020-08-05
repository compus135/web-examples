import React, { forwardRef } from "react";

const FancyButton = (props, ref) => {
  return <button ref={ref}>BTN</button>;
};

const FancyButtonFR = forwardRef(FancyButton);

class ForwardingRefsDemo extends React.Component {
  buttonRef = React.createRef();
  componentDidMount() {
    this.buttonRef.current.focus();
  }
  render() {
    return <FancyButtonFR ref={this.buttonRef} />;
  }
}

export default ForwardingRefsDemo;
