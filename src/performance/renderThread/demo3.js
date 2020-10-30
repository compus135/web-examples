function loadData() {
  let ul = document.getElementById("root");

  setTimeout(function fn111() {
    console.time(1);
    let li = document.createElement("li");
    li.innerText = 11111;
    ul.appendChild(li);
    // 模拟耗时任务,大约16ms
    for (let index = 0; index < 200; index++) {
      console.log(1);
    }
  }, 0);
  setTimeout(function fn2222222() {
    let li = document.createElement("li");
    li.innerText = 2222222222222;
    ul.appendChild(li);
    for (let index = 0; index < 1; index++) {
      console.log(1);
    }
  }, 0);
}
