const now = Date.now();
const total = 100000;
const count = 25;
const ul = document.getElementById("root");
function loop(times) {
  if (times === 0) {
    return;
  }
  setTimeout(() => {
    for (let j = 0; j < count; j++) {
      const li = document.createElement("li");
      li.innerText = (total / count - times) * count + j;
      ul.appendChild(li);
    }

    loop(times - 1);
  }, 0);
}

loop(total / count);

console.log("js运行时间：", Date.now() - now);
