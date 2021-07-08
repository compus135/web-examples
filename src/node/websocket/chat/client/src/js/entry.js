(function () {
  const oEnterBtn = document.getElementById("enter");
  const oUsername = document.getElementById("username");
  function init() {
    bindEvent();
  }
  function bindEvent() {
    oEnterBtn.addEventListener("click", handleEnter);
  }
  function handleEnter() {
    const username = oUsername.value.trim();
    if (username) {
      window.localStorage.setItem("username", username);
      window.location.href = "index.html";
    } else {
      alert("请输入用户名");
    }
  }
  init();
})();
