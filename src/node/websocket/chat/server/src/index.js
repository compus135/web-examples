const ws = require("ws");
const server = new ws.Server({ port: 8000 });

function init() {
  bindEvent();
}

function bindEvent() {
  server.on("connection", handleConnection);
  server.on("error", handleError);
  server.on("close", handleClose);
}

function handleConnection(ws) {
  console.log("server connection");

  ws.on("message", handleMessage);
}
function handleError() {
  console.log("server error");
}
function handleClose() {
  console.log("server close");
}
function handleMessage(message) {
  console.log("server message");
  server.clients.forEach((client) => {
    client.send(message);
  });
}

init();
