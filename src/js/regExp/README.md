# match

1. 返回值: 未使用 g 标志，仅返回第一个完整匹配及相关捕获组

```
const str = "some letters zz13bcz245bc"
const r = str.match(/z(\d+)b/)
console.log(r)
// logs [
//   'z13b',
//   '13',
//   index: 14,
//   input: 'some letters zz13bc',
//   groups: undefined
// ]

// 'z13b' 整个匹配
//  '13' 被(\d+)捕获
// index: 14, 整个匹配的索引
```

# 字符

1. (x): 括号称为捕获括号，匹配 x 且记住匹配项

```
const str = "foo bar foo bar xxx"
const r = str.match(/(foo) (bar) \1 \2/)
console.log(r)
// logs
// [
//     'foo bar foo bar',
//     'foo',
//     'bar',
//     index: 0,
//     input: 'foo bar foo bar xxx',
//     groups: undefined
//   ]

// \1 表示第一个被捕获括号匹配的子字符串
```

2. +?: 尽量匹配一次

```
const str = "zz13bc"
const r = str.match(/z(\d+)/)
console.log(r)
// logs [ 'z13', '13', index: 1, input: 'zz13bc', groups: undefined ]
const str2 = "zz13bc"
const r2 = str2.match(/z(\d+?)/)
console.log(r2)
// logs [ 'z1', '1', index: 1, input: 'zz13bc', groups: undefined ]
```
