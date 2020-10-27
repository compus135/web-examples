let now = Date.now();
const total = 100000;
let ul = document.getElementById("root");
for (let index = 0; index < total; index++) {
  let li = document.createElement("li");
  li.innerText = index;
  ul.appendChild(li);
}

console.log("js运行时间：", Date.now() - now);
setTimeout(() => {
  console.log("总运行时间：", Date.now() - now);
}, 0);
