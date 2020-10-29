document.body.style = "background:blue";
console.log(1);
setTimeout(function () {
  document.body.style = "background:black";
  console.log(2);
}, 0);
