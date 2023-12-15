## 原型链

- 对象直接量的原型：Object.prototype
- Object.prototype 的原型：null
- new 创建的对象的原型：构造函数.prototype
- 函数的原型：
- 相关 API：
  `isPrototypeOf()`：是否是指定对象的原型；
  `__proto__`: 对象原型；
  `Object.getPrototypeOf()`: 获取指定对象原型

## 对象

- 对象的键是标识符，字符串，Symbol，保留字，如：`var obj = {null:123}; var tmp = null; obj[tmp] === 123`

## 数组

- apply：二维数组转为一维数组

```
function convertTwoDimenArrayToOneDimenArray(array: any[]) {
  return [].concat.apply([], array);
}
```

- reduce: 遍历数组中的每个元素，执行回调函数 fn，执行结果是下一次调用 fn 的参数，最终返回最后一次调用 fn 的结果。
  reduce 定义：

```
reduce(
  callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T,
  initialValue: T
): T;
```

previousValue：上次调用 callbackfn 的返回值或 initialValue；
currentValue：当前数组元素；
currentIndex：当前数组元素下表；
array：当前数组。

```
const arr = [1, 2, 3, 4];
let result = arr.reduce((accumulator, currentValue) => {
  return accumulator * currentValue;
}, 0);
console.log(result);
// 10
```

compose 函数实现：

```
const compose = (...functions) => {
  return (value) =>
    functions.reverse().reduce((accumulator, fn) => fn(accumulator), value);
};
```

reduce 实现

```
Array.prototype.myReduce = function (cb, initialValue) {
  const array = this;
  let acc = initialValue || array[0];
  const startIndex = initialValue ? 0 : 1;
  for (let i = startIndex; i < array.length; i++) {
    const cur = array[i];
    acc = cb(acc, cur, i, array);
  }
  return acc;
};
```

- 排序
  sort() 会改变原数组，localeCompare() 比较两个字符编码顺序返回 -1， 0， 1

```
const arr = [{ name: 'lise' }, { name: 'zs' }];
arr.sort((a, b) => a.name.localeCompare(b.name));
console.log(arr);
```

## 字符串

- 子字符串在指定字符串中第{num}次出现的位置

```
/**
 * 子字符串在指定字符串第{num}次出现的位置
 * @param {*} subString 子字符串
 * @param {*} parentString 父字符串
 * @param {*} num 第几次出现
 */
function subStringIndex(subString, parentString, num) {
  let subStringIndex = -1;
  for (let index = 0; index < num; index++) {
    subStringIndex = parentString.indexOf(subString, subStringIndex + 1);
    if (subStringIndex === -1) return -1;
  }
  return subStringIndex;
}
```

- match：如果没有 g 标志，等同于 RegExp.exec()，返回第一个完整匹配及相关捕获组。如果有 g，返回所有完整匹配但不返回捕获组。通过使用括号 () 将表达式括起来，你可以创建一个捕获组。`(\d{2})-(\d{2})-(\d{4})` 这个正则表达式匹配日期的模式，其中有三个捕获组，分别用于匹配年、月和日。
- 转义字符：字符串表示特殊字符时需要用到转义符，如用字符串表示换行符`\n`，常用的转义字符有：`\n` `\t` `\'` `\"` `\\`

## 运算符

### 逻辑非(!)

`!x`是将操作数的 bool 值取反，`!!x`是操作数的等价 bool 值。其它数据类型转换为 bool 值：

- `""`, `0`, `-0`, `null`, `undefined`, `false`, `NaN`六种对应 bool 值 false
- 其它情况对应的 bool 值为 true

### 逻辑与(&&)

`&&`可以对真值和假值进行布尔与操作，都是真值返回最后一个真值，如果有假值返回第一个假值。

## Proxy

Proxy 用于修改某些操作的默认行为，如重新定义属性的读取和设置行为。

```
const obj = {};
const proxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    console.log(target, key, receiver);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, value, receiver) {
    console.log('set value');
    return Reflect.set(target, key, value, receiver);
  },
});

console.log(proxy.key++);
```

# 客户端 javascript

## window 对象

- navigator: 浏览器厂商和版本信息。navigator 对象过去用来嗅探浏览器厂家做兼容，如今只需测试所需的方法或属性，而不是假设特定的浏览器版本。

## 存储

- cookie
  特点：

```
// 1. 键值对
// 2. path 生效cookie的路径
// 3. domain  生效cookie的域
// 4. expires 过期时间 session 或 'Fri, 15 Dec 2023 07:30:04 GMT' (Date.prototype.toUTCString())
```

操作：

```
// 1. 设置cookie
document.cookie="name=lisi&path=/&domain=sub.example.com&expires=session"
// 2. 删除cookie 使用相同的名字、路径和域，并将max-age指定为0
  document.cookie = "name=123;max-age=0;path=/;domain=.example.com";
// 3. 修改cookie
document.cookie="name=lisi2"
// 4. 查询cookie
document.cookie
```

# TODO

- getElementById() 只有在作为 document 的方法时才能起作用，而在 DOM 中的其他元素下无法生效。这是因为 ID 值在整个网页中必须保持唯一。因此没有必要为这个方法创建所谓的“局部”版本。
