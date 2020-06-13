async function fn() {
  throw new Error("error...");
}

fn();
console.log(1);
