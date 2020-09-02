在开发过程中我们会引入 js 库。我们希望引入的 js 库能像 ts 一样能进行静态类型检测和智能提示。

我们需要将 js 库中的函数和方法体移除只保留需要对外导出的类型声明即可。这个类型声明就是声明文件，扩展名：d.ts。

## 全局库

全局库是指使用 script 标签导入的库，我们可以通过 window 对象访问。例如 lib.js：

```
function double(params) {
  return 2 * params;
}
```

假如我们要在 ts 文件中调用 lib.js 中的方法，需要创建一个声明文件 lib.d.ts：

```
declare namespace lib {
  function double(p: number): number;
}

```

声明文件中的类型使用 declare 来声明。为了验证声明文件是否可以正常工作，我们创建 demo.ts 文件：

```
const r = lib.double(2);
console.log(r);
```

编译 test.ts `tsc test.ts lib.d.ts`，注意声明文件要一同编译。
