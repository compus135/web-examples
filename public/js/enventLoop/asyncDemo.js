// async  await  执行流程
const urls = [1, 2, 3];
const request = (url) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(url);
    }, 9 - url);
  });

function test(p) {
  console.log("test");
  return p;
}
async function fn() {
  const promises = urls.map((url) => request(url));
  for (const p of promises) {
    console.log("start");
    const r = await test(p);
    console.log(r);
  }
}
fn();
console.log("end");

// logs : start test end 1 start test 2 start test 3
