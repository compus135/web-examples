function Fn(val) {
  this.value = val;
}

Fn.of = function (val) {
  return new Fn(val);
};

Fn.prototype.join = function (val) {
  return this.value;
};

const obj = new Fn(new Fn(1));
const obj2 = Fn.of(Fn.of(2));

console.log(obj.join());
console.log(2222);
