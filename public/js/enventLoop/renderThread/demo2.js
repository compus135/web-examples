function test() {
  setTimeout(function () {
    document.body.style = "background:blue";
  }, 0);
  setTimeout(function () {
    document.body.style = "background:black";
  }, 0);
}
