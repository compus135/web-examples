const forEach = (array, fn) => {
  let i;
  for (i = 0; i < array.length; i++) fn(array[i]);
};

const forEachObject = (obj, fn) => {
  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      //calls the fn with key and value as its argument
      fn(property, obj[property]);
    }
  }
};

const unless = (predicate, fn) => {
  if (!predicate) fn();
};

const times = (times, fn) => {
  for (var i = 0; i < times; i++) fn(i);
};

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

const concatAll = (array, fn) => {
  let results = [];
  for (const value of array) results.push.apply(results, value);

  return results;
};

const reduce = (array, fn, initialValue) => {
  let accumlator;

  if (initialValue != undefined) accumlator = initialValue;
  else accumlator = array[0];

  for (const value of array) accumlator = fn(accumlator, value);

  return [accumlator];
};

const zip = (leftArr, rightArr, fn) => {
  let index,
    results = [];

  for (index = 0; index < Math.min(leftArr.length, rightArr.length); index++)
    results.push(fn(leftArr[index], rightArr[index]));

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

MayBe.prototype.join = function () {
  return this.isNothing() ? MayBe.of(null) : this.value;
};
MayBe.prototype.chain = function (f) {
  return this.map(f).join();
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

exports.forEach = forEach;
exports.forEachObject = forEachObject;
exports.unless = unless;
exports.times = times;
exports.filter = filter;
exports.map = map;
exports.concatAll = concatAll;
exports.reduce = reduce;
exports.zip = zip;
exports.simpleCompose = simpleCompose;
exports.compose = compose;
exports.curry = curry;
exports.partial = partial;
exports.pipe = pipe;
exports.MayBe = MayBe;
exports.Either = { Some: Some, Nothing: Nothing };
