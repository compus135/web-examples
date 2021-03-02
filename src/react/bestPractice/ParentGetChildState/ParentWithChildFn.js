import React, { useState, useEffect } from "react";

class Test extends React.Component {
  handleFocus = () => {
    console.log(this.getCount());
  };
  countWatcher = (getCount) => (this.getCount = getCount);
  render() {
    return (
      <div>
        <Child countWatcher={this.countWatcher}></Child>
        <button onClick={this.handleFocus}>focus</button>
      </div>
    );
  }
}

function Child(props) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((preState) => preState + 1);
  };

  const { countWatcher } = props;
  useEffect(() => {
    const getCount = () => {
      return count;
    };
    countWatcher(getCount);
  }, [countWatcher, count]);

  return (
    <div>
      {count}
      <button onClick={handleClick}>INCREASE</button>
    </div>
  );
}

export default Test;
