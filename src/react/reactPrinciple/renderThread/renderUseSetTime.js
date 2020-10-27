const now = Date.now();
const total = 100000;
const count = 100;
const ul = document.getElementById("root");
for (let index = 0; index < total / count; index++) {
  setTimeout(() => {
    for (let j = 0; j < count; j++) {
      const li = document.createElement("li");
      li.innerText = index * count + j;
      ul.appendChild(li);
    }
    console.log(`setTimeout ${index} 开始时间：`, Date.now() - now);
  }, 0);
}

console.log("js运行时间：", Date.now() - now);
setTimeout(() => {
  console.log("总运行时间：", Date.now() - now);
}, 0);
