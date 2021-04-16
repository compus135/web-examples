import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

class Test extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <h2>Test page</h2>
        <Link to="/page1"> page111</Link>
        <br />
        <Link to="/page2"> page222</Link>
        <Route path="/page1" component={Page1}></Route>
        <Route path="/page2" component={Page2}></Route>
      </BrowserRouter>
    );
  }
}

class Page1 extends React.Component {
  state = { count: 0, info: "info" };
  handleClick = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count && this.state.count === 5) {
      this.setState({ info: "info change" });
    }
  }

  render() {
    const { count, info } = this.state;
    return (
      <div>
        <h2>Page1 title</h2>
        <button onClick={this.handleClick}>increase</button>
        <div>{count}</div>
        <div>{info}</div>
        <div>page1 content...</div>
      </div>
    );
  }
}

class Page2 extends React.Component {
  state = { count: 0, info: "info" };
  handleClick = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count && this.state.count === 5) {
      this.setState({ info: "info change" });
    }
  }

  render() {
    const { count, info } = this.state;
    return (
      <div>
        <h2>Page2 title</h2>
        <button onClick={this.handleClick}>increase</button>
        <div>{count}</div>
        <div>{info}</div>
        <div>page2 content...</div>
      </div>
    );
  }
}

export default Test;
