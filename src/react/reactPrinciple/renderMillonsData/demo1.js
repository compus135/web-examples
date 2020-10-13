//js execute time: 540
// demo.js:1 [Violation] 'load' handler took 541ms
// demo.js:14 allTime: 4250
// 执行js -> 渲染ui -> input输入 -> 渲染结束 -> input输入渲染
function loadData() {
  const ul = document.getElementById("ul");
  const count = 100000;
  const start = new Date().getTime();
  for (let index = 0; index < count; index++) {
    const tmpDom = document.createElement("li");
    tmpDom.innerHTML = Math.random() * 100;
    ul.appendChild(tmpDom);
  }
  const jsEndTime = new Date().getTime() - start;
  console.log("js execute time:", jsEndTime);
  setTimeout(() => {
    const allTime = new Date().getTime() - start;
    console.log("allTime:", allTime);
  }, 0);
}
