## 原理

- 高阶函数就是定义抽象

## 例子

1. sortBy

```
const people = [
  { first: "li", second: "si" },
  { first: "zhang", second: "shan" },
  { first: "li", second: "si2" },
];

var r = people.sort((p1, p2) => (p1.second < p2.second ? -1 : 1));

// 比较逻辑抽象出来
const sortBy = (property) => (a, b) => {
  return a[property] < b[property] ? -1 : 1;
};

r = people.sort(sortBy("first"));
console.log(r);
```
