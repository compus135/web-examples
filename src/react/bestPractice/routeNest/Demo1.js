import React from "react";
import { Link } from "react-router-dom";

/**
  1. Link 会渲染成a标签；不能传递参数；NavLink 是带有active样式的Link；
  2. Route 可以嵌套； path参数:id；exact; Redirect 重定向
  3. Switch
 */
class Test extends React.Component {
  state = { flag: 0 };
  handleClick = () => {
    this.setState((preState) => ({ flag: !preState.flag }));
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>reset</button>
        <Link to="/">home</Link>
      </div>
    );
  }
}

export default Test;
