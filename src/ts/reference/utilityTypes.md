## Partial<Type>

返回的类型中，Type 的属性集是可选的。

```
interface Todo {
  title: string;
  description: string;
}

type SubSet = Partial<Todo>

interface SubSet{
  title?: string;
  description?: string;
}
// Tmp 等同于 SubSet
```

## Required<Type>

返回的类型中，`Type`中的所有属性都是必填。

```
interface Props {
  a?: number;
  b?: string;
}

type SubSet = Required<Props>

interface Tmp {
  a: number;
  b: string;
}
// Tmp 等同于 SubSet
```

## Readonly<Type>

返回的类型中，`Type`中的所有属性都是只读的

## Record<Keys,Type>

返回的类型中，属性的键是 Keys，属性值的类型是 Type

```
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";


interface Tmp{
    "miffy":CatInfo,
    "boris":CatInfo,
    "mordred":CatInfo,
}
```

## Pick<Type,Keys>

返回的类型中，只包含 Keys 的属性

```
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;
```

## Omit<Type,Keys>

返回的类型中，不包含 Keys 的属性

```
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Omit<Todo, "title" | "completed">;
```

## Exclude<UnionType,ExcludeMembers>

返回的类型中，不包含 ExcludeMembers

```
type T0 = Exclude<"a" | "b" | "c", "a">;
等同于
type T0 = "b" | "c"
```

## Extract<Type,Union>

返回的类型中，只包含公共部分

```
type T0 = Extract<"a" | "b" | "c", "a" | "f">;
等同于
type T0 = "a"
```
