import { SyncLane } from "./ReactFiberLane.js";
import scheduleUpdateOnFiber from "./ReactFiberWorkLoop.js";
const classComponentUpdater = {
  enqueueUpdateSetState(inst, partialState) {
    const fiber = get(inst);
    const eventTime = requestEventTime();
    const lane = requestUpdateLane(fiber);
    const update = createUpdate(eventTime, lane);
    update.payload = partialState;
    enqueueUpdate(fiber, update);
    scheduleUpdateOnFiber(fiber);
  },
};
export default class Component {
  constructor() {
    this.updater = classComponentUpdater;
  }
  setState(partialState) {
    this.updater.enqueueUpdateSetState(this, partialState);
  }
}
function get(inst) {
  return inst._reactInternals;
}

function enqueueUpdate(fiber, update) {
  fiber.updateQueue.push(update);
}

function createUpdate(eventTime, lane) {
  return { eventTime, lane };
}

function requestEventTime() {
  return performance.now();
}

function requestUpdateLane(fiber) {
  return SyncLane;
}
