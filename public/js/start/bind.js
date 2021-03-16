/**

bind函数用于指定函数调用的上下文及部分参数，
语法结构如下：`[fn].bind([context],[arg1...])`。
bind函数返回的函数可以作为构造函数使用，生成的对象的原型是原函数，
原函数中的this不再指向bind的context而是指向生成的对象。
 */
function test(b, c) {
  console.log(this.a + b + c); // 3
}
const fn = test.bind({ a: 1 }, 2);
fn(3);
