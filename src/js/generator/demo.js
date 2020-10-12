function* demo() {
  const tmp = yield 1;
  console.log(tmp);
}
//
const ite = demo(); //函数不执行，返回迭代器
console.log(ite.next(1));
console.log(ite.next(2)); // next函数的参数作为上次yield的结果
console.log(ite.next());
console.log(ite.next());
console.log(ite.next());
