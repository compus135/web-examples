import React from "react";

class ReactEnvent extends React.Component {
  parentRef = React.createRef();
  childRef = React.createRef();
  componentDidMount() {
    this.parentRef.current.addEventListener(
      "click",
      () => {
        console.log("父元素 原生 捕获");
      },
      true
    );
    this.parentRef.current.addEventListener("click", () => {
      console.log("父元素 原生 冒泡");
    });
    this.childRef.current.addEventListener(
      "click",
      () => {
        console.log("子元素 原生 捕获");
      },
      true
    );
    this.childRef.current.addEventListener("click", () => {
      console.log("子元素 原生 冒泡");
    });
    document.addEventListener(
      "click",
      () => {
        console.log("document 捕获");
      },
      true
    );
    document.addEventListener("click", () => {
      console.log("document 冒泡");
    });
  }
  parentBubble = () => {
    console.log("父元素React 冒泡");
  };
  childBubble = () => {
    console.log("子元素React 冒泡");
  };
  parentCapture = () => {
    console.log("父元素React 捕获");
  };
  childCapture = () => {
    console.log("子元素React 捕获");
  };
  render() {
    return (
      <div
        ref={this.parentRef}
        onClick={this.parentBubble}
        onClickCapture={this.parentCapture}
      >
        <p
          ref={this.childRef}
          onClick={this.childBubble}
          onClickCapture={this.childCapture}
        >
          事件执行顺序
        </p>
      </div>
    );
  }
}

export default ReactEnvent;
