function loadData() {
  let ul = document.getElementById("root");

  setTimeout(function fn111() {
    let li = document.createElement("li");
    li.innerText = 11111;
    ul.appendChild(li);
  }, 0);
  setTimeout(function fn2222222() {
    let li = document.createElement("li");
    li.innerText = 2222222222222;
    ul.appendChild(li);
  }, 0);
}
