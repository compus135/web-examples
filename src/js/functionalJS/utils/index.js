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

exports.filter = filter;
exports.map = map;
exports.simpleCompose = simpleCompose;
exports.compose = compose;
exports.curry = curry;
exports.partial = partial;
exports.pipe = pipe;

const fn = (value) => value * value;
const fn2 = (value) => value + value;
const r = compose(fn, fn2)(3);
console.log(r);
const fn3 = (arr) => {
  return (value) =>
    arr.reduce((v, ifn) => {
      return ifn(v);
    }, value);
};
