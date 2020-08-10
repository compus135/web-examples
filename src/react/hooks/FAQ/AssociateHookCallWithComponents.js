const { useState } = require("react");

const arr = [];
let index = 0;
function fakeUseState(value) {
  const currentIndex = index;
  arr[currentIndex] = value;
  index++;
  function setValue(value) {
    arr[currentIndex] = value;
  }
  return [arr[currentIndex], setValue];
}
function fakeComponent() {
  index = 0;
  const [name, setName] = fakeUseState("zhang san");
  const [age, setAge] = fakeUseState(3);

  setTimeout(() => {
    setName("zhang san2");
    setAge(4);
    console.log(arr);
  }, 1000);
  console.log(arr);
}

fakeComponent();
