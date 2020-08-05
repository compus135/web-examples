import React, { useImperativeHandle, useRef, forwardRef } from "react";

function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
      console.log("object");
    },
  }));
  return <input ref={inputRef} />;
}

const FancyInputFR = forwardRef(FancyInput);

class UseImperativeHandleDemo extends React.Component {
  inputRef = React.createRef();
  componentDidMount() {
    this.inputRef.current.focus();
  }
  render() {
    return <FancyInputFR ref={this.inputRef} />;
  }
}

export default UseImperativeHandleDemo;
