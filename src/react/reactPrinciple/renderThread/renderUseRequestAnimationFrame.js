const total = 100000;
const ul = document.getElementById("root");

const pageCount = 25;

function loop(times) {
  if (times <= 0) {
    return;
  }
  window.requestAnimationFrame(() => {
    for (let j = 0; j < pageCount; j++) {
      const li = document.createElement("li");
      li.innerText = (total / pageCount - times) * pageCount + j;
      ul.appendChild(li);
    }
    loop(times - 1);
  });
}

loop(total / pageCount);
