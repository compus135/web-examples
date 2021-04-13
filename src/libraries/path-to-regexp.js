/**
 * 将路由字符串转换为正则表达式，常用于路由匹配。使用示例：
 */
const { pathToRegexp } = require("path-to-regexp");

const keys = [];
const regexp = pathToRegexp("/:foo/:bar", keys);
// keys = [{ name: 'foo', prefix: '/', ... }, { name: 'bar', prefix: '/', ... }]

const result = regexp.exec("/test/route");
//result = [ '/test/route', 'test', 'route', index: 0, input: '/test/route', groups: undefined ]
console.log(result);
