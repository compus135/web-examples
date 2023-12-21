## 项目属性

- flex-grow: 默认为 0 ，即使有剩余空间也不放大。
- flex-shrink: 默认为 1，当空间不足时，将等比例缩小。设置 flex 的项会优先被压缩，(初步理解成：因为 flex: 1; 具有较高的灵活性因子，更愿意缩小以适应可用空间)如：

```
<!-- 压缩完content再压缩key  -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .container {
        display: flex;
      }
      .key {
        flex-shrink: 1;
        width: 300px;
        height: 300px;
        color: red;
        background: #666;
      }
      .content {
        flex: 1;
        width: 300px;
        height: 300px;
        color: blue;
        background: #999;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="key"></div>
      <div class="content"></div>
    </div>
  </body>
</html>

```

- `flex:1; width:0`的应用：设置 width=0 则项目具备块级元素的特性即只能占据剩余空间，当项目的内容溢出时适用块级元素的溢出策略。

```
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .c1 {
        display: flex;
        padding: 10px;
        background: red;
      }
      .i1 {
        flex-shrink: 0;
        width: 200px;
        height: 200px;
        background: #666;
      }
      .i2 {
        flex: 1;
        width: 0;
        height: 200px;
        background: #999;
      }
      .i21 {
        /* overflow: hidden; */
      }
    </style>
  </head>
  <body>
    <div class="c1">
      <div class="i1"></div>
      <div class="i2"><div class="i21">111111111111111111112222222222</div></div>
    </div>
  </body>
```

## FAQ

- 什么情况会产生溢出？
  当容器不能容纳项目时，项目的子元素不能压缩或项目的 flex-shrink=0 会产生溢出。
