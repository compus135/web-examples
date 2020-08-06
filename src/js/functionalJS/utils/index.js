const map = (array, fn) => {
  let results = [];
  for (const value of array) {
    results.push(fn(value));
  }
  return results;
};
const filter = (array, fn) => {
  let results = [];
  for (const value of array) {
    !!fn(value) && results.push(value);
  }
  return results;
};

const curry = (fn) => {
  return function curriedFn(...args) {
    if (args.length < fn.length) {
      return function () {
        return curriedFn.apply(null, args.concat([].slice.call(arguments)));
      };
    }
    return fn.apply(null, args);
  };
};

const partial = function (fn, ...partialArgs) {
  let args = partialArgs;
  return function (...fullArguments) {
    let arg = 0;
    for (
      let index = 0;
      index < args.length && arg < fullArguments.length;
      index++
    ) {
      if (args[index] === undefined) {
        args[index] = fullArguments[arg++];
      }
    }

    return fn.apply(null, args);
  };
};

const compose = (...functions) => {
  return (value) =>
    functions.reverse().reduce((accumulator, fn) => fn(accumulator), value);
};
const pipe = (...functions) => {
  return (value) =>
    functions.reduce((accumulator, fn) => fn(accumulator), value);
};
const simpleCompose = (fnA, fnB) => (arg) => fnA(fnB(arg));

const MayBe = function (val) {
  this.value = val;
};

MayBe.of = function (val) {
  return new MayBe(val);
};

MayBe.prototype.isNothing = function () {
  return this.value === null || this.value === undefined;
};

MayBe.prototype.map = function (fn) {
  return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this.value));
};

const Nothing = function (val) {
  this.value = val;
};

Nothing.of = function (val) {
  return new Nothing(val);
};

Nothing.prototype.map = function (fn) {
  return this;
};
const Some = function (val) {
  this.value = val;
};

Some.of = function (val) {
  return new Some(val);
};

Some.prototype.map = function (fn) {
  return Some.of(fn(this.value));
};

exports.filter = filter;
exports.map = map;
exports.simpleCompose = simpleCompose;
exports.compose = compose;
exports.curry = curry;
exports.partial = partial;
exports.pipe = pipe;
exports.MayBe = MayBe;
exports.Either = { Some: Some, Nothing: Nothing };

const result = Nothing.of("test").map((x) => x.toUpperCase());

console.log(result);
