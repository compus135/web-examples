function test() {
  setTimeout(function fn111() {
    document.body.style = "background:blue";
  }, 0);
  setTimeout(function fn222() {
    document.body.style = "background:black";
  }, 0);
}
