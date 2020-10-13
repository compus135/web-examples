function loadData() {
  const ul = document.getElementById("ul");
  let total = 10000;
  let once = 20;
  let pageCount = total / once

  function loop(page) {
    if (page >= pageCount) {
      return;
    }
    window.requestAnimationFrame(function () {
      for (let index = 0; index < once; index++) {
        const tmpDom = document.createElement("li");
        tmpDom.innerHTML = page * once + index ;
        ul.appendChild(tmpDom);
      }
      page++
      loop(page)
    });
  }
  loop(0)
}
