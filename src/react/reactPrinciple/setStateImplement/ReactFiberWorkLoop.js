import { HostRoot, ClassComponent } from "./ReactWorkTags.js";
const NoLanePriority = 1;
const SyncLanePriority = 12;
const syncQueue = [];

const NoContext = 0;
const BatchedContext = 1;
let executionContext = NoContext;

export default function scheduleUpdateOnFiber(fiber) {
  const root = markUpdateLaneFromFiberToRoot(fiber);
  isRootScheduled(root);
  if (executionContext === NoContext) {
    flushSyncCallbackQueue();
  }
}

export function batchedUpdates(fn) {
  let preExecuteContext = executionContext;
  executionContext = BatchedContext;
  fn();
  executionContext = preExecuteContext;
}

function isRootScheduled(root) {
  const newCallbackPriority = SyncLanePriority;
  const existingCallbackPriority = root.callbackPriority;
  if (newCallbackPriority === existingCallbackPriority) {
    return;
  }
  scheduleSyncCallback(performSyncWorkOnRoot.bind(null, root));
  queueMicrotask(flushSyncCallbackQueue);
  root.callbackPriority = newCallbackPriority;
}

function markUpdateLaneFromFiberToRoot(fiber) {
  let parent = fiber.return;
  while (parent) {
    fiber = parent;
    parent = parent.return;
  }
  if (fiber.tag === HostRoot) {
    return fiber;
  }
  return null;
}

function performSyncWorkOnRoot(workInProgress) {
  let root = workInProgress;
  while (workInProgress) {
    if (workInProgress.tag === ClassComponent) {
      let inst = workInProgress.stateNode;
      inst.state = processUpdateQueue(inst, workInProgress);
      inst.render();
    }
    workInProgress = workInProgress.child;
  }
  commitRoot(root);
}

function commitRoot(root) {
  root.callbackPriority = NoLanePriority;
}

function processUpdateQueue(inst, fiber) {
  return fiber.updateQueue.reduce((state, { payload }) => {
    return { ...state, ...payload };
  }, inst.state);
}

function flushSyncCallbackQueue() {
  syncQueue.forEach((cb) => cb());
  syncQueue.length = 0;
}

function scheduleSyncCallback(cb) {
  syncQueue.push(cb);
}
