function test() {
  const root = document.getElementById("root");

  let taskList = [];
  let index = 0;
  let num = 0;
  let t = 0;

  function loopIdle() {
    window.requestIdleCallback(
      (deadline) => {
        let index = 0;
        while (deadline.timeRemaining() > 0 || deadline.didTimeout) {
          // const fragment = document.createDocumentFragment();

          const li = document.createElement("li");
          li.innerHTML = index++;
          for (let i = 0; i < 20000000; i++) {}
          // fragment.appendChild(fragment);
          taskList.push(li);
        }
        num++;
        if (num < 10) {
          console.log("----");
          console.log(taskList);
          loopIdle();
        }
      },
      { timeout: 2000 }
    );
  }

  function loopAnimation() {
    window.requestAnimationFrame(() => {
      if (taskList.length) {
        let fragment = document.createDocumentFragment();
        for (let i = 0; i < taskList.length; i++) {
          fragment.appendChild(taskList[i]);
        }
        root.appendChild(fragment);
        taskList = [];
      }
      if (num < 10) {
        loopAnimation();
      }
    });
  }

  //loopAnimation();
  loopIdle();
}
