/**
 * 数据类型(type)
 * 数据类型是对值的包装，不仅包括值还包括相关的属性和方法。
 * 1. Value数据类型
 * 2. 把函数封装成数据类型
 * 3. 数据类型和数据类型的运算
 * 4. 我们需要的是这样一种函数：输入和输出都是数据类型
 * 5. 每一步返回的都是数据类型的实例
 */

function Value(v) {
  this.value = v;
}

const value2 = new Value(2);

Value.prototype.map = function (fn) {
  return new Value(fn(this.value));
};

function add(params) {
  return 3 + params;
}

function fmap(fn, type) {
  return new Value(fn(type.value));
}
function fmap2(fn, type) {
  return type.map(fn);
}

function fmap3(type1, type2) {
  return new Value(type1.value(type2.value));
}
fmap(add, value2);

function STR() {}

function FileType(params) {}

function getLine(p) {
  return new STR(p);
}

function readfile(p) {
  return FileType();
}

function putStrLn(params) {}
