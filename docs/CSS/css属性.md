- white-space：用于控制元素内部文本空白字符（例如空格、制表符和换行符）的处理方式。
  自动换行：`text-wrap: nowrap | wrap`
  空白字符：空格、Tab、换行等
  该属性取值主要有：
  `pre`: 文本空白换行会被保留， 按照换行符换行，不会自动换行（text-wrap:nowrap）；
  `nowrap`: 文本空白会合并， 换行符不换行， 不会自动换行；
  `pre-wrap`：文本空白换行会被保留 按照换行符换行，会自动换行（text-wrap:wrap）；

- overflow：用于控制元素内容溢出时的处理方式，无论子元素是否是绝对定位`overflow`都能控制内容溢出时的表现。
  该属性取值主要有：
  `visible`: 内容溢出容器时可见；
  `hidden`: 内容溢出容器时被裁剪，隐藏；
  `auto`: 内容溢出容器时，添加滚动条以允许用户滚动查看溢出内容。
  当`overflow:auto`且子元素超过父元素高度时，`父元素滚动`，子元素会相应的滚动，即便子元素是绝对定位也会跟着一起滚动。如果想子元素固定在父元素底部且不随父元素滚动。可以将子元素移出父元素，放到其它位置，以便不受父元素滚动的影响。

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .container {
        position: relative;
      }
      #root {
        height: 200px;
        background: #333;
        overflow: visible;
      }
      .btn {
        height: 400px;
        background: #999;
        margin: 0 24px;
      }
      .abs {
        position: absolute;
        bottom: 0;
        left: 24px;
        right: 24px;
        height: 24px;
        background: #ccc;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div id="root">
        <div class="btn">btn</div>
      </div>
      <div class="abs">abs</div>
    </div>
  </body>
</html>

```

`scrollHeight`: 等于该元素在不使用滚动条的情况下为了适应视口中所用内容所需的最小高度。包括元素的 padding，但不包括元素的 border 和 margin。
滚动到底部：`element.scrollTo({ top: root.scrollHeight, behavior: "smooth" });`

父元素空间不足时，table 会默认收缩以适应父元素，但收缩至最小时仍会溢出。

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Table Overflow Example</title>
    <style>
      .parent-container {
        width: 500px;
        overflow: auto;
        border: 1px solid #ccc;
      }

      table {
        border-collapse: collapse;
      }

      th,
      td {
        padding: 8px;
        text-align: left;
        border: 1px solid #dddddd;
      }

      th {
        background-color: #f2f2f2;
      }
    </style>
  </head>
  <body>
    <div class="parent-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>25</td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>

```

块级元素，当没有设置宽度时，宽度由父元素确定；行内块元素，当没有设置宽度时，宽度可以无限宽。

```
 <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .container {
        padding: 10px;
        overflow: hidden;
        background: #666;
      }
      .c {
        display: inline-block;
        background: #999;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="c">1111111111112222222222333333333</div>
    </div>
  </body>
```

- box-sizing:用于确定元素总宽度和高度的计算方式。
  该属性取值主要有：
  `border-box`:宽度和高度属性包括内容、padding、border；
  `content-box`:这是默认值，宽度和高度属性仅包括内容区域。
- float: 主要用于图文混排，文字会围绕图片。float 属性指定的元素在容器的左侧或右侧放置，元素从文档流中移除，但仍保持部分流动性。

```
<div>
      <img src="./public/logo192.png" style="float: right; height: 20px;" />this
      is text... this is text... this is text...this is text...
    </div>
```

- display:'inline': 内联元素的子元素是块级元素，子元素的宽如果是百分比，则是基于非内联的祖先元素计算。

```
<style>
      .c {
        width: 200px;
      }
      .s2 {
        display: inline-block;
        width: 100%;
        background: #000;
      }
    </style>
<div class="c">
      <span class="s1">
        <span class="s2">123</span>
      </span>
    </div>
<!-- s2  基于c计算宽带-->
```

- 逻辑属性：`margin-inline-end`等同于`margin-right`，表示行内块结束端外边距。

## 典型场景

- 元素不足以容纳文本时截断文本并显示省略号

```
      <div className="truncate-text">
      不加样式自动换行不加样式自动换行Linedddddddddddddddddddddddddddused
      </div>

.truncate-text {
  white-space: nowrap; /* 防止文本换行 */
  overflow: hidden;   /* 隐藏溢出的部分 */
  text-overflow: ellipsis; /* 使用省略号来表示截断 */
  width: 100px; /* 设置元素宽度，当文本溢出时会被截断 */
}
```

- antd 中的 Select 组件使用 flex 布局会撑大空间。
  flex 布局中使用 flex 属性指定子元素的相对尺寸，当空间不足时会溢出，如果指定 width 属性即使空间不足也不会溢出。

```
<div style={{display:'flex',width:400}}>
  <div style={{width:100,flexShrink:0}}> fdafa</div>
  <div style={{ display: "inline-block", flex: 1,marginLeft:20,width:10 }}>
        <div style={{ display: "flex" }}>
          <span
            style={{
              display: "inline-block",
              overflow: "hidden",
              "white-space": "nowrap",
              "text-overflow": "ellipsis",
              flex: 1,
            }}
          >
           flex布局中使用flex属性指定子元素的相对尺寸，当空间不足时会溢出，如果指定width属性即使空间不足也不会溢出。
          </span>
        </div>
      </div>
</div>
```

- float 属性的元素，可能会影响其他元素的宽度。

```
    <div>
      <div style="background-color: red;">
        <button>btn</button>
        <button style="float: right; height: 40;">btn2</button>
      </div>
      <div>
        <div style="display: flex; flex-direction: column;background: green;">
          123
        </div>
      </div>
    </div>
<!-- element 宽度受 float 元素影响 -->
```

- 图片充满容器，高不裁剪，左侧不裁剪

```
// 图片设计：宽高比要大些，即宽要长些
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <img src={bg} style={{ objectFit: 'cover', objectPosition: 'left top' }} />
    </div>
// 计算过程：`objectFit: 'cover' ` 保持宽高比且只会裁剪高或宽，如果图片的宽高比大于容器的宽高比则高度不会裁剪，会基于 objectPosition 裁剪宽度
```
