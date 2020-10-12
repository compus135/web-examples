function* doWork(A, B, C) {
  console.log(0);
  var x = doExpensiveWork(A);
  yield;
  console.log(3);
}

function doExpensiveWork() {
  console.log(1);
}

// 执行器
const g = doWork();
g.next();
// 有高优先级任务，执行高优先级任务
