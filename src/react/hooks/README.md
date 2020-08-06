## useMemo

使用场景：

1. 开销很大的计算，比如深拷贝数据
2. 由于引用改变，导致下游组件重新渲染

## useRef

返回的 ref 对象在组件的生命周期内保持不变，即每次渲染，值不变。

## useLayoutEffect

等同于 class 组件的 componentDidMount 和 componentDidUpdate。修改 DOM 操作放到 useLayoutEffect 中，如果放到 useEffect 中，useEffect 中的函数会在组件渲染到屏幕上之后执行，此时对 DOM 进行修改，会触发浏览器回流和重绘，增加性能的损耗。
