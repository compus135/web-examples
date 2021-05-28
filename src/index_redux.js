import React, { useState } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import "./index.css";
import App from "./App/index";
import * as serviceWorker from "./serviceWorker";

const reducer = (state = { count: 0 }, payload) => {
  switch (payload.type) {
    case "INCREASE":
      return { count: state.count + 1 };

    default:
      break;
  }
  return state;
};
const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: "INCREASE" });
class Child2 extends React.Component {
  render() {
    console.log(111);
    return <div>cccc</div>;
  }
}
const Child = connect()(Child2);
ReactDOM.render(
  <Provider store={store}>
    <Test />
  </Provider>,
  document.getElementById("root")
);

function Test() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <Child />
    </div>
  );
}

// connect()(Child);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
