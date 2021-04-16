import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const withCountAndInfoState = (Comp) => {
  return class extends React.Component {
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
        <Comp
          {...this.props}
          count={count}
          info={info}
          onCountChange={this.handleClick}
        ></Comp>
      );
    }
  };
};

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
@withCountAndInfoState
class Page1 extends React.Component {
  render() {
    const { count, info, onCountChange } = this.props;
    return (
      <div>
        <h2>Page1 title</h2>
        <button onClick={onCountChange}>increase</button>
        <div>{count}</div>
        <div>{info}</div>
        <div>page1 content...</div>
      </div>
    );
  }
}

@withCountAndInfoState
class Page2 extends React.Component {
  render() {
    const { count, info, onCountChange } = this.props;
    return (
      <div>
        <h2>Page2 title</h2>
        <button onClick={onCountChange}>increase</button>
        <div>{count}</div>
        <div>{info}</div>
        <div>page2 content...</div>
      </div>
    );
  }
}

export default Test;
