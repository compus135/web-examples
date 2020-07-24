import React from "react";
import "./styles/base.less";
import "./styles/lightStyle.less";
import "./styles/darkStyle.less";

class App extends React.Component {
  state = {
    themeClass: "",
  };
  render() {
    return (
      <div className={`${this.state.themeClass} runtime-theme`}>
        <div className="runtime-theme-base">
          <div
            className={`runtime-theme-content`}
            onClick={() =>
              this.setState((preState) => {
                if (preState.themeClass === "") {
                  return { themeClass: "dark" };
                } else {
                  return { themeClass: "" };
                }
              })
            }
          >
            this is title
          </div>
          <button className="runtime-theme-btn">确定</button>
        </div>
      </div>
    );
  }
}

export default App;
