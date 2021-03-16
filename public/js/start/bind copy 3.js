function test(b, c) {
  console.log(this.a + b + c); // NaN
}
const Fn = test.bind({ a: 1 }, 2);
const obj = new Fn(3);
console.log(obj.__proto__ === test.prototype); //true
console.log(obj.constructor === test.prototype.constructor); //true
