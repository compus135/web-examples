(() => {
  "use strict";
  let o = 3;
  function l() {
    o++;
  }
  console.log("lib"),
    console.log("about"),
    console.log(o),
    l(),
    console.log(o),
    console.log("index"),
    console.log(o),
    l(),
    console.log(o);
})();
