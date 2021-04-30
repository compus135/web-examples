const Koa = require("koa");
const fs = require("fs");
const path = require("path");
const router = require("koa-router")();
const koaBody = require("koa-body");
const koaStatic = require("koa-static");
const send = require("koa-send");

const app = new Koa();

app.use(koaBody());

router.get("/", (ctx) => {
  ctx.type = "html";
  const pathUrl = path.join(__dirname, "static/download.html");
  ctx.body = fs.createReadStream(pathUrl);
});

router.get("fileload/:name", async (ctx) => {
  const name = ctx.params.name;
  const path = `static/${name}`;
  ctx.attachment(path);
  await send(ctx, path);
});

app.use(koaStatic(path.join(__dirname)))

app.use(router.routes()).use(router.allowedMethods())

app.listen(3001,()=>{
    console.log('listen 3001')
})
