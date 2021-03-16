function test(b, c) {
  console.log(this.a + b + c); // 6
}
// eslint-disable-next-line no-extend-native
Function.prototype.myBind = function (obj, ...rest) {
  const self = this;
  return function () {
    return self.apply(obj, [...rest, ...arguments]);
  };
};
const fn = test.myBind({ a: 1 }, 2);
fn(3);
