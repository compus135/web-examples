async function fn() {
  console.log(1);
  throw new Error("error...");
  console.log(3);
}

fn();
console.log(2);
// 1 2
// throw error, fn() back a promise
