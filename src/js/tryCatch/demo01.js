function fn() {
  try {
    throw new Error("error...");
  } catch (error) {
    console.log(1);
    return;
  }
  console.log(2);
}

fn();
