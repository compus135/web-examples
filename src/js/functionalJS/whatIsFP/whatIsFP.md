1. 不是纯函数

```
// price 不是纯函数
var discount = 0.8;
var price = (value) => discount * value;
// price依赖外部变量discount
price(10) === 8;

discount = 0.6;
price(10) === 6;
```

2. 纯函数

```
// 纯函数
var double = (value) => value * 2;

```

3. 修改外部变量

```
// 修改外部变量
var global = "value";
var badFunction = (value) => {
  global = "value2";
  return value * 2;
};
```

4. 引用透明性

```
// 引用透明性

var double = (value) => value * 2;
// double(2) 可以用 4 替换
```

5. 命令写法 vs 声明式写法

```
//命令写法
var array = [1, 2, 3];
for (let index = 0; index < array.length; index++) {
  console.log(index);
}

// 声明式写法
array.forEach((element) => console.log(element));

```

6. 例子：100 以内的奇数

```
// 命令式写法
for (let index = 0; index < 100; index++) {
  if (index % 2) {
    console.log(index);
  }
}
```

函数式写法：

```
function times(num, fn) {
  for (let index = 0; index < num; index++) {
    fn(index);
  }
}

function unless(predicate, fn) {
  if (predicate) {
    fn();
  }
}
// 100 以内的奇数
times(100, (index) => {
  unless(index % 2, () => {
    console.log(index);
  });
});
```

7. 打印数组中偶数的值
   命令式编程：

```
// 查找列表中的偶数
var array = [1, 2, 3, 4, 8];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  if (element % 2 === 0) {
    console.log(element);
  }
}
```

函数式编程要把操作过程抽象到函数中，把循环过程抽象到 forEach 函数中，判断是否为偶数`if (element % 2 === 0){}`抽象到 unless 函数中，调用：

```
const forEach = (array, fn) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    fn(element);
  }
};

const unless = (num, fn) => {
  if (num % 2 === 0) {
    fn();
  }
};

forEach(array, (element) => {
  unless(element, () => console.log(element));
});

```
