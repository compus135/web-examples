import React, { useReducer } from "react";

function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count };

    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return init(action.payload);
    default:
      throw new Error();
  }
}
const UserReducerDemo = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <div>
      {state.count}
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset", payload: initialCount });
        }}
      >
        reset
      </button>
    </div>
  );
};

const App = () => {
  return <UserReducerDemo initialCount={0} />;
};

export default App;
