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

2. 闭包记住上下文

```
var fn = (arg) => {
  let outer = "visible";
  let innerFn = () => {
    console.log(outer);
    console.log(arg);
  };
  outer = "hidden";
  return innerFn;
};

```

3. 数组元素转变为整数

```
const unary = (fn) => (fn.length === 1 ? fn : (arg) => fn(arg));

const r = ["1", "2", "3"].map(unary(parseInt));
```

4. 运行一次给定的函数

```
const once = (fn) => {
  let done = false;

  return function () {
    return done ? undefined : ((done = true), fn.apply(this, arguments));
  };
};

var doPayment = once(() => {
  console.log("payment is done");
});

doPayment(); //payment is done
doPayment(); //undefined
```

5. memoized

```
const memoized = (fn) => {
  const lookupTable = {};

  return (arg) => lookupTable[arg] || (lookupTable[arg] = fn(arg));
};
```

6. map

```
const map = (array, fn) => {
  let results = [];
  for (const value of array) results.push(fn(value));

  return results;
};
```

7. filter

```
const filter = (array, fn) => {
  let results = [];
  for (const value of array) fn(value) ? results.push(value) : undefined;

  return results;
};
```

8. 嵌套数组转为非嵌套的单一数组

```
const concatAll = (array, fn) => {
  let results = [];
  for (const value of array) results.push.apply(results, value);

  return results;
};
```
