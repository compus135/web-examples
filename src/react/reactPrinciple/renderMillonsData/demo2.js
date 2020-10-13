function loadData() {
  const ul = document.getElementById("ul");
  const count = 100000;
  const onceCount = 200;
  const start = new Date().getTime();
  for (let index = 0; index < count; index += onceCount) {
    setTimeout(() => {
      for (let index = 0; index < onceCount; index++) {
        const tmpDom = document.createElement("li");
        tmpDom.innerHTML = Math.random() * 100;
        ul.appendChild(tmpDom);
      }
    }, 0);
  }

  const jsEndTime = new Date().getTime() - start;
  console.log("js execute time:", jsEndTime);
  setTimeout(() => {
    const allTime = new Date().getTime() - start;
    console.log("allTime:", allTime);
  }, 0);
}
