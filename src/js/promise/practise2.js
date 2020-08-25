// 多个网络请求，按次序输出结果
// 顺序执行多个promise,可以采用返回promise的方法实现
const urls = ["url111", "url222", "url333"];

const request = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url);
    }, Math.random() * 5000);
  });
};

const resultPromises = urls.map((url) => request(url));

resultPromises.reduce((chain, resultPromise) => {
  return chain.then(() => resultPromise).then((result) => console.log(result));
}, Promise.resolve());
