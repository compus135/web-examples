# 一次渲染所有数据

将所有数据一次插入到页面中：

```
let now = Date.now();
const total = 100000;
let ul = document.getElementById("root");
for (let index = 0; index < total; index++) {
  let li = document.createElement("li");
  li.innerText = index;
  ul.appendChild(li);
}

console.log("js运行时间：", Date.now() - now);
setTimeout(() => {
  console.log("总运行时间：", Date.now() - now);
}, 0);
//js运行时间： 255
//总运行时间： 4648

```

渲染流程：浏览器先调度 js 线程执行 js 代码，然后调度渲染线程进行渲染，由于有大量的dom操作，渲染耗费的时间就比较长。

# 使用setTime分批渲染
渲染流程：
1. js线程执行整体代码script，将setTimeout回调放入宏任务中；
2. js整体代码执行完，从宏任务中选择setTimeout回调执行；
3. 检查时间片是否到了，如果到了执行渲染线程，否则从宏任务中选择setTimeout回调执行；从而达到分批渲染，每次渲染的数量取决于执行了几个setTimeout回调。
4. 最后一个setTimeout回调执行完，所有数据都渲染完成了

缺点：
每次渲染的数据量是不确定的，取决于setTimeout回调的速度，速度越快，一次渲染的数据量就越大，渲染的时间就越长。

# 使用 requestAnimationFrame分批渲染
requestAnimationFrame的回调是在每次渲染前调用，因此不存在掉帧现象。