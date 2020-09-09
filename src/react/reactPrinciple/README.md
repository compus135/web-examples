1. react 源码目录结构

```
{
  packages: {
    react: {},
    "react-dom": {},
    "react-fetch":{},//演示使用，生产环境不能使用
    shared:{}
  },
};
```

2. useState 最简实现

- 每个组件都有一个 fiber 与之关联
- fiber 结构

```
{
  memoizedState: {
    queue: { pending: null },
    memoizedState: null,
    next: null,
  },
  stateNode: App, //组件
};
```
