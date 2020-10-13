// to do
function loadData() {
  //需要插入的容器
  let ul = document.getElementById("ul");
  // 插入十万条数据
  let total = 100000;
  // 一次插入 20 条
  let once = 20;
  //总页数
  let page = total / once;
  //每条记录的索引
  let index = 0;
  //循环加载数据
  function loop(curTotal, curIndex) {
    if (curTotal <= 0) {
      return false;
    }
    //每页多少条
    let pageCount = Math.min(curTotal, once);
    setTimeout(() => {
      for (let i = 0; i < pageCount; i++) {
        let li = document.createElement("li");
        li.innerText = curIndex + i + " : " + ~~(Math.random() * total);
        ul.appendChild(li);
      }

      loop(curTotal - pageCount, curIndex + pageCount);
    }, 0);
  }

  loop(total, index);
}
