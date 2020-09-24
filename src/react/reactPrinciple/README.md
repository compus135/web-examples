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
  初始值：

```
{
  memoizedState: null,
  stateNode: App, //组件
};
```

首次渲染

```
{
  memoizedState: {
    queue: { pending: null },
    memoizedState: initialState,
    next: null,
  },
  stateNode: App, //组件
};
```

多个 useState

```
{
  memoizedState: {
    queue: { pending: null },
    memoizedState: "value",
    next: {
      queue: { pending: null },
      memoizedState: "value",
      next: null,
    },
  },
  stateNode: "App", //组件
};
```

队列有 1 个更新

```
update = {
  action: "updateFn",
  next: null,
};
update.next = update;

fiber = {
  memoizedState: {
    queue: { pending: update },
    memoizedState: "value",
    next: null,
  },
  stateNode: "App",
};
```

队列有 2 个更新

```
 update2 -> update1 -> update2
```

- workInProgressHook
  组件渲染前的数据结构 fiber.memoizedState，会赋值给中间变量 hook

- isMount
  是否首次渲染

- dispatchAction(queue,action)
  调用 useState()返回 setState 方法 dispatchAction.bind(null, hook.queue)；

  调用 setState 方法 dispatchAction(hook.queue，stateUpdater)；

- useState
- schedule
  渲染组件入口
