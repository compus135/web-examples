# js

## 1 基础

### 1.1 闭包

函数内部定义的函数可以称之为闭包。闭包强大的原因在于作用域链的访问。变量作用域是在函数定义时确定的，而不是函数调用时确定的。

闭包可以记住上下文。

使用场景：函数式编程之高阶函数，hooks

### this

调用这个方法的对象

### 对象

1. 获取对象属性： getOwnPropertyNames //自身所有属性；Object.keys // 自身可枚举；for in // 所有可枚举包括继承的

## http

response content-type:octet-stream 客户端采用 a 标签下载；Content-Type: application/json;charset=UTF-8，可以使用 createObjectUrl 生成 bob url,然后用 a 标签下载。

# 性能优化

## dom 操作

1. DocumentFragment, DocumentFragment 不是真实 dom 树的一部分，它的变化不会触发 DOM 的重新渲染。

```
let ul = document.getElementById("root");
const fragment = document.createDocumentFragment();

for (let index = 0; index < total; index++) {
  let li = document.createElement("li");
  li.innerText = index;
  fragment.appendChild(li);
}
ul.appendChild(fragment);
```

# 实践

1. 添加反向数据流 `react/inverseDataFlow`

# 每日一题

1. 介绍下 webpack，并说下构建流程

2. 有一组 api 接口，依此调用接口，上一个接口调用后（无论成功还是失败）才继续调用下个接口，显示进度，可取消任务

3. BFC 原理

4. React 中父组件获取子组件的状态有哪些方法
