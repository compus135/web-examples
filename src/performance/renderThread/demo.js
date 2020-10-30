function loadData() {
  let now = Date.now();
  const total = 100000;
  let ul = document.getElementById("root");
  const fragment = document.createDocumentFragment();

  for (let index = 0; index < total; index++) {
    let li = document.createElement("li");
    li.innerText = index;
    fragment.appendChild(li);
  }
  ul.appendChild(fragment);

  console.log("js运行时间：", Date.now() - now);
  setTimeout(() => {
    console.log("总运行时间：", Date.now() - now);
  }, 0);
}
