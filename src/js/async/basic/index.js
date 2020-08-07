//next > finally
function fn() {
  Promise.reject("reject").finally(() => console.log("finally"));
  console.log("next");
}

async function fn1() {
  await Promise.reject("reject");
  console.log("next");
}

async function fn2() {
  await Promise.reject("reject").catch(() => console.log("catch"));
  console.log("next");
}

async function fn3() {
  await Promise.reject("reject").finally(() => console.log("finally"));
  console.log("next");
}

fn();
