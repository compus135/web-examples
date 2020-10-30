function test() {
  const ul = document.getElementById("root");

  function loop(times) {
    if (times <= 0) {
      return;
    }
    window.requestAnimationFrame(function addItem() {
      let li = document.createElement("li");
      li.innerText = 111;
      ul.appendChild(li);
      loop(times - 1);
    });
  }

  loop(60);
}
