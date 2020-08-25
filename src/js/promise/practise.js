// 多个网络请求，按次序输出结果
// 采用async实现
const urls = ["url111", "url222", "url333"];

const request = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url);
    }, Math.random() * 5000);
  });
};

async function logInOrder(params) {
  const resultPromises = urls.map((url) => request(url));
  for (const resultPromise of resultPromises) {
    const result = await resultPromise;
    console.log(result);
  }
}

logInOrder();
