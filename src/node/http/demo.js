const Koa = require("koa");
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'fn({ key: "value" })';
});

app.listen(3000);
