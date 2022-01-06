// 根据传入的参数不同返回不同类型的数据
// 实现签名对外不可见
function fn(arg: string): number;
function fn(arg: number): { key: string };
function fn(arg): any {
  if (typeof arg === "string") {
    return 1;
  } else {
    return { key: 1 };
  }
}

const r = fn("");
console.log(r.key);

export {};
