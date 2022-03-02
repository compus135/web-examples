## useState

父组件只提供初始值，子组件维护内部状态

```
const [name, setName] = useState(props.name);
// 首次渲染时 name 取决于 props.name, props.name 再次发生变化时 name 不变
```

## useMemo

使用场景：

1. 开销很大的计算，比如深拷贝数据
2. 由于引用改变，导致下游组件重新渲染

## useRef

返回的 ref 对象在组件的生命周期内保持不变，即每次渲染，值不变。

## useLayoutEffect

等同于 class 组件的 componentDidMount 和 componentDidUpdate。修改 DOM 操作放到 useLayoutEffect 中，如果放到 useEffect 中，useEffect 中的函数会在组件渲染到屏幕上之后执行，此时对 DOM 进行修改，会触发浏览器回流和重绘，增加性能的损耗。

## FAQ

1. 多个 useState 调用获得各自独立的 state 的原因？
   组件维护了一个 state 列表，调用 useState 时从列表当前位置读取 state，然后指针下移，这样多个 useState 调用获得各自独立的 state。当重新渲染的时候列表指针回到初始位置。
2. hooks 组件重新渲染，会重新调用该组件函数，函数里的变量。
