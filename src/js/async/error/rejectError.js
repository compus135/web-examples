async function fn() {
  await new Promise((resolve, reject) => {
    reject("error...");
  });
}

fn().catch((e) => {
  console.log(1, e);
});
