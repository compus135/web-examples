function test(b, c) {
  console.log(this.a + b + c); // NaN
}
// eslint-disable-next-line no-extend-native
Function.prototype.myBind = function (obj, ...rest) {
  const self = this;
  function Fn() {
    self.apply(this instanceof Fn ? this : obj, [...rest, ...arguments]);
  }
  Fn.prototype = this.prototype;
  return Fn;
};
const f = test.myBind({ a: 1 }, 2);
const obj = new f(3);
