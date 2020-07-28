const Container = function (val) {
  this.value = val;
};

Container.of = function (val) {
  return new Container(val);
};

Container.prototype.map = function (fn) {
  return Container.of(fn(this.value));
};

const instance = Container.of(3);
const result = instance.map((val) => val * val);

console.log(result);
