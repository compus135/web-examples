export var foo = "bar";
console.log("lib");
setTimeout(() => {
  console.log(foo);
}, 500);
