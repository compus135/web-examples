## 项目属性

- flex-grow: 默认为 0 ，即使有剩余空间也不放大。
- flex-shrink: 默认为 1，当空间不足时，将等比例缩小。设置 flex 的项会优先被压缩，如：

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

## FAQ

- 什么情况会产生溢出？
  当容器不能容纳项目时，项目的子元素不能压缩或项目的 flex-shrink=0 会产生溢出。
