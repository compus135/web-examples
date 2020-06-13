async function fn() {
  await new Promise((resolve, reject) => {
    throw new Error("error...");
  }).catch(() => {
    console.log(2);
    return;
  });
  console.log(3);
}

fn();
console.log(1);
