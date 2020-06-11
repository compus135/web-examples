async function fn() {
  try {
    await new Promise((resolve, reject) => {
      throw new Error("error...");
    });
  } catch (error) {
    console.log(2);
    return;
  }
  console.log(3);
}

fn();
console.log(1);
