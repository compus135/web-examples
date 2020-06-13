async function fn() {
  throw new Error("error...");
}

fn().catch((e) => {
  console.log(1, e);
  return;
});
console.log(2);
