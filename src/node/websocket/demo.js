const WebSocket = require("ws");

const wss = new WebSocket.Server({
  port: 8080,
});
wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(msg) {
    console.log("received:%s", msg);
  });

  ws.send("hello client");
});
