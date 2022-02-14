// 调用中间件函数得到新函数（对原函数进行了功能增强）

const fn = (arg) => console.log(arg);
const mw1 = (next) => (arg) => {
  console.log("mw1-start");
  next(arg);
  console.log("mw1-end");
};

const mw2 = (next) => (arg) => {
  console.log("mw2-start");
  next(arg);
  console.log("mw2-end");
};

mw2(mw1(fn))(1);
