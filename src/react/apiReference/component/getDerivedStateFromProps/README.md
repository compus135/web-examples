getDerivedStateFromProps 的目的：当 props 改变时， 更新 state

## 特点

- render()前被调用,每次渲染都调用
- 返回要更新的对象，或 null 表示什么也不更新

## 适用场景

- props 改变时，加载外部数据
- props 改变时，修改当前的滚动方向

## 缺点

- 代码冗余，使代码难以维护

## 使用派生 state 导致的问题的原因

- 直接复制 prop 到 state 上
- 如果 prop 和 state 不一致就更新 state

## 替代方案

以下方案使组件可预测、可维护

- props 改变时，执行副作用(数据提取)，使用 componentDidUpdate
- props 改变时，重新计算某些数据，使用 memoize
- props 改变时，重置 state，使组件完全受控或使用 key 使组件完全不受控

注：使用 key 适用于组件内部有 state 的情况

## 与 componentWillReceiveProps 对比

- componentWillReceiveProps 容易被误用，会产生问题。
