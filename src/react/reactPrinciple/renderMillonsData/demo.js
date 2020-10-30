function loadData() {
  const ul = document.getElementById("root");
  let total = 10000;
  let pageSize = 20;
  let pageCount = total / pageSize;

  function loop(page) {
    if (page >= pageCount) {
      return;
    }
    window.requestAnimationFrame(function () {
      for (let index = 0; index < pageSize; index++) {
        const tmpDom = document.createElement("li");
        tmpDom.innerHTML = page * pageSize + index;
        ul.appendChild(tmpDom);
      }
      page++;
      loop(page);
    });
  }
  loop(0);
}
