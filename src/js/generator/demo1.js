function* demo() {
  console.log(1);
  yield;
  yield 2;
  yield 3;
  return 4;
}
//
const ite = demo(); //函数不执行，返回迭代器
// console.log(ite.next());
// console.log(ite.next());
// console.log(ite.next());
// console.log(ite.next());
// console.log(ite.next());
