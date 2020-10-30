function test(params) {
  const ul = document.getElementById("root");

  window.requestAnimationFrame(function addItem() {
    let li = document.createElement("li");
    li.innerText = 111;
    ul.appendChild(li);
  });

  window.requestAnimationFrame(function addItem() {
    let li = document.createElement("li");
    li.innerText = 222222;
    ul.appendChild(li);
  });
}
