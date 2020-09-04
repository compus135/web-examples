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

9. reduce

   上次的输出作为下一次的输入。reduce 是为保持 js 闭包而设计。

```
//模拟实现reduce
   function fakeReduce(arr, fn) {
    let result = 0;
    for (const e of arr) {
      result = fn(result, e);
    }
    console.log(result);
   }
```

10. 数组函数式编程综合应用

    统计 books 评价 good 和 excellent 的数量
    数据结构如下：

```
let apressBooks2 = [
  {
    name: "beginners",
    bookDetails: [
      {
        id: 111,
        title: "C# 6.0",
        author: "ANDREW TROELSEN",
        rating: [4.7],
        reviews: [{ good: 4, excellent: 12 }],
      },
      {
        id: 222,
        title: "Efficient Learning Machines",
        author: "Rahul Khanna",
        rating: [4.5],
        reviews: [],
      },
    ],
  },
  {
    name: "pro",
    bookDetails: [
      {
        id: 333,
        title: "Pro AngularJS",
        author: "Adam Freeman",
        rating: [4.0],
        reviews: [],
      },
      {
        id: 444,
        title: "Pro ASP.NET",
        author: "Adam Freeman",
        rating: [4.2],
        reviews: [{ good: 14, excellent: 12 }],
      },
    ],
  },
];
```

过程式写法：

```
function p() {
  const allBooks = apressBooks2.map((e) => e.bookDetails);
  const concatBooks = [];
  allBooks.forEach((e) => concatBooks.push(...e));
  const allPreviews = concatBooks.map((e) => e.reviews);
  const concatPreviews = allPreviews.filter((e) => e.length).map((e) => e[0]);
  return concatPreviews.reduce(
    (acc, e) => [acc[0] + e.good, acc[1] + e.excellent],
    [0, 0]
  );
}
```

函数式写法：

```
function fn() {
  return reduce(
    concatAll(
      map(concatAll(map(apressBooks2, (e) => e.bookDetails)), (e) => e.reviews)
    ),
    (acc, e) => [acc[0] + e.good, acc[1] + e.excellent],
    [0, 0]
  );
}
```
