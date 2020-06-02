import React, { PureComponent } from "react";
// PureComponents 只会在 state 或者 prop 的值修改时才会再次渲染。
// 通过对 state 和 prop 的 key 做浅比较（ shallow comparison ）来确定有没有变化。
class Example extends PureComponent {
  // state 只需要保存 filter 的值：
  state = {
    filterText: "",
  };

  handleChange = (event) => {
    this.setState({ filterText: event.target.value });
  };

  render() {
    // PureComponent 的 render 只有
    // 在 props.list 或 state.filterText 变化时才会调用
    const filteredList = this.props.list.filter((item) =>
      item.text.includes(this.state.filterText)
    );

    return (
      <React.Fragment>
        <input onChange={this.handleChange} value={this.state.filterText} />
        <ul>
          {filteredList.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Example;
