const eventObj = {
  arr: [],
  on: function (fn) {
    this.arr.push(fn);
  },
  emit: function () {
    this.arr.forEach((fn) => {
      fn();
    });
  },
};
const result = [];
eventObj.on(() => {
  if (result.length === 2) {
    console.log(result);
  }
});
fakeFetch("url1").then(() => {
  result.push("response 1");
  eventObj.emit();
});
fakeFetch("url2").then(() => {
  result.push("response 2");
  eventObj.emit();
});

function fakeFetch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 100);
  });
}
