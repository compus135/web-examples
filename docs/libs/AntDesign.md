## Layout

页面级整体布局。

## 主题

Ant design 将影响主题的最小元素称之为 Design Token，如 colorText, fontSize 等。

- 组件中使用当前主题下的 design token

```
import { theme } from 'antd';
const { useToken } = theme;

const PasswordSet = () => {
  const { token } = useToken();
  return <div>{token.colorText}</div>;
};
```

- 静态消费

```
import { theme } from 'antd';
const { getDesignToken } = theme;
const token = getDesignToken();
console.log(token.colorText);
```

## Descriptions

- span 占据几列

## Card

## Tabs

## Table

用于展示行列数据。

- 筛选：`filters=[{value,text}]`设置筛选项，`onFilter`触发筛选时会逐个调用 onFilter 函数，其一满足后续就不再调用了，如名字中带有名或明的人，`filterMultiple` 默认为 true。
- 排序：defaultSortOrder, sorter
- 固定列：`scroll:x`即 table 最小宽度为 x。父容器大于 x，则 table 宽度等于父容器宽度，否则 table 宽度等于 x。
  指定 width 会优先压缩可压缩单元格。

```css
.ant-table-content{
  overflow:"auto"
}
table{
  min-width:"100%";
  width:1000px; (x)
}
```

## Modal

- 异步关闭：`confirmLoading=== true`显示 loading，否则不显示。
- 确定按钮：onOk 点击确定回调 function(e)

## Form

- 初始值：Form initialValues
- 校验规则：Item rules，多个规则：`rules={[{ required: true }, formNameRule]}`

- 输入回车自动执行 onFinish
- 必须配合 Form.Item 使用，否则收集不到数据
- <Form.Item name="name" noStyle>，不添加额外的 dom 节点，仅为表单添加 name\lable\rules
- 表单数据域发生变化会根据规则校验
- 表单可以嵌入其它元素

```
<Form>
        <p>not form item</p>
        <Form.Item name="name">
          <Input />
        </Form.Item>
      </Form>
```

- form css 结构

```
form
  - .ant-form-item
    - .ant-row
      - .ant-col
        - label
      - .ant-col
        - .ant-form-item-control-input
```

- Form.Item 用于表单组件布局(labelCol,wrapperCol)、校验(rules)、双向绑定（name）
  Item 可以被包裹\嵌套如：

```
    <Form>
      <div>
        <div>
          <Form.Item>xxx</Form.Item>
        </div>
      </div>
    </Form>

    <Form.Item label="Username" name="xx">
      <Space>
        <Form.Item
          name="username"
          noStyle
          rules={[{ required: true, message: 'Username is required' }]}
        >
          <Input style={{ width: 160 }} placeholder="Please input" />
        </Form.Item>
        <Tooltip title="Useful information">
          <Typography.Link href="#API">Need Help?</Typography.Link>
        </Tooltip>
      </Space>
    </Form.Item>
```

Form.Item 嵌套子组件后，不更新表单值，可以通过 HOC 自定义组件形式来解决这个问题

- 表单布局：layout='inline'

```
form (flex)
  - .ant-form-item (margin-inline-end:16)
    - .ant-col
      - label
    - .ant-col
      - .ant-form-item-control-input (input 默认有个宽度，select 默认宽度包裹内容，可指定width)
```

- 嵌套结构

```
<Form.Item
      name={['user', 'name']}
      label="Name"
      rules={[{ required: true }]}
    >
      <Input />
    </Form.Item>
```

表单值 values.user.name

- 动态增减表单项 Form.List 封装了增删逻辑，renderProps 自定义表单。
- 校验与更新依赖，当依赖项变化时会触发校验与更新
- 表单项的值，直接设置是无效的

```
// 无效
      <Form.Item label="Password" name="password" rules={[{ required: true }]}>
        <Input value={'xxx'} />
      </Form.Item>
```

- 动态表单与更新依赖综合应用

```
import { Button, Form, Input } from 'antd';
const { useForm } = Form;
const Test = () => {
  const [form] = useForm();
  return (
    <Form form={form} onFinish={(values) => console.log(values)}>
      <Form.List name="names">
        {(fields, { add }) => {
          return (
            <>
              {fields.map(({ key, name, ...rest }) => (
                <div key={key}>
                  <Form.Item name={[name, 'rate']} {...rest}>
                    <Input
                      onChange={(e) =>
                        form.setFieldValue(
                          ['names', name, 'price'],
                          e.target.value,
                        )
                      }
                    />
                  </Form.Item>
                  <Form.Item dependencies={[['names', name, 'rate']]}>
                    {() => {
                      return (
                        <div>
                          23
                          <Form.Item name={[name, 'price']} {...rest}>
                            <Input />
                          </Form.Item>
                        </div>
                      );
                    }}
                  </Form.Item>
                </div>
              ))}
              <Button onClick={() => add()}>add</Button>
            </>
          );
        }}
      </Form.List>
      <Form.Item>
        <Button htmlType="submit">submit</Button>
      </Form.Item>
    </Form>
  );
};

export default Test;

```

### Select

- optionRender: 自定义渲染下拉项
- 布局：默认宽度包裹内容，可指定 width

### Input

- 布局：`width:100%`，原生 input 有个默认宽度。

```
.ant-input{
    display: inline-block;
    width: 100%;
}
```

## FAQ

- Input 未输入任何值返回 undefined 还是 null?
  Q: 未输入返回 undefined, 输入后返回 ''，初始值是 null 或 undefined 都不显示。
- less 如何消费 Design Token
