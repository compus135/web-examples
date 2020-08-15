/**
 * 1. 函数像漏斗输入一个值下面出来一个值
 * 2. 函数可以连接起来使用，上一个函数的输出作为下一个函数的输入
 * 3. 函数可以处理数据集合中的每个成员
 *
 *
 */
function add(params) {
  return 2 + params;
}

function add2(params) {
  return 3 + params;
}
add2(add(10));
function arrFn(arr) {
  return arr.map((item) => item + 3);
}
