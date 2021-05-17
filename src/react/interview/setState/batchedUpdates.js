const NoContext = 0;
const BatchedContext = 1;
let executionContext = NoContext; //默认值
export function batchedUpdates(fn) {
  let preExecutionContext = executionContext;
  executionContext |= BatchedContext;
  fn();
  executionContext = preExecutionContext;
}
