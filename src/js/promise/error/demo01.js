function fn() {
  const promise = new Promise((resolve, reject) => {
    throw new Error("error...");
    console.log(1);
    resolve("resolve");
  })
    .then(() => console.log(3))
    .catch(() => {
      console.log(2);
    });
  console.log(1);
}

fn();
