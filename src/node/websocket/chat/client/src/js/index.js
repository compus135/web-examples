(function () {
  const oMessage = document.getElementById("message");
  const oSend = document.getElementById("send");
  const socket = new WebSocket("ws://localhost:8000");
  function init() {
    bindEvent();
  }
  function bindEvent() {
    oSend.addEventListener("click", handleSend);
    socket.addEventListener("open", handleOpen);
    socket.addEventListener("close", handleClose);
    socket.addEventListener("error", handleError);
    socket.addEventListener("message", handleMessage);
  }
  function handleOpen(e) {
    console.log("client open");
  }
  function handleClose(e) {
    console.log("client close");
  }
  function handleError(e) {
    console.log("client error");
  }
  function handleMessage(e) {
    console.log("client message");
    const oList = document.getElementById("list");
    const message = JSON.parse(e.data);
    oList.appendChild(createMessage(message));
  }
  function createMessage(data) {
    const { username, time, message } = data;
    const oItem = document.createElement("li");
    oItem.innerHTML = `
    <p>
      <span>${username}：</span>
      <i>${time}</i>
    </p>
    <p>消息：${message}</p>
    `;
    return oItem;
  }
  function handleSend() {
    const message = oMessage.value.trim();
    const username = window.localStorage.getItem("username");
    if (message) {
      socket.send(
        JSON.stringify({
          username,
          time: new Date().getTime(),
          message,
        })
      );
      oMessage.value = "";
    } else {
      alert("请输入消息");
    }
  }
  init();
})();
