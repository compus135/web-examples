import React from "react";
import ReactDom from "react-dom";

class Test extends React.Component {
  state = { list: new Array(100000).fill(0) };
  add = () => {
    this.setState({ list: [...this.state.list, 1] });
  };
  render() {
    return (
      <ul>
        <input />
        <button onClick={this.add}>add</button>
        {this.state.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
}
ReactDom.render(<Test />, document.getElementById("root"));
export default Test;
