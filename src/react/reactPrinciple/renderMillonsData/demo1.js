function loadData() {
  const ul = document.getElementById("root");
  const count = 100000;
  const start = new Date().getTime();
  for (let index = 0; index < count; index++) {
    const tmpDom = document.createElement("li");
    tmpDom.innerHTML = index;
    ul.appendChild(tmpDom);
  }
  const jsEndTime = new Date().getTime() - start;
  console.log("js execute time:", jsEndTime);
  setTimeout(() => {
    const allTime = new Date().getTime() - start;
    console.log("allTime:", allTime);
  }, 0);
}
