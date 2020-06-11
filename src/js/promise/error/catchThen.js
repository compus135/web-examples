function fn() {
  const promise = new Promise((resolve, reject) => {
    throw new Error("error...");
    console.log(1);
    resolve("resolve");
  })
    .catch(() => {
      console.log(2);
    })
    .then(() => console.log(4))
    .catch(() => {
      console.log(3);
    });
  console.log(1);
}

fn();
