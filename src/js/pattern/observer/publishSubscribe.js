const pubSub = {
  subscribes: [],
  subscribe: function (fn) {
    this.subscribes.push(fn);
  },
  publish: function () {
    this.subscribes.forEach((fn) => {
      fn();
    });
  },
};
const result = [];
pubSub.subscribe(() => {
  if (result.length === 2) {
    console.log(result);
  }
});
fakeFetch("url1").then(() => {
  result.push("response 1");
  pubSub.publish();
});
fakeFetch("url2").then(() => {
  result.push("response 2");
  pubSub.publish();
});

function fakeFetch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 100);
  });
}
