function deleteElement(arr, name) {
  const newArr = [...arr];
  newArr.forEach((element, index) => {
    element.name === name && newArr.splice(index, 1);
  });
  return newArr;
}

const arr = [
  { key: 1, name: "lili" },
  { key: 2, name: "xiaogang" },
  { key: 3, name: "guoguo" },
];
const arr2 = deleteElement(arr, "lili");
console.log(arr2);
