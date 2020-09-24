var update = {
  action: "updateFn",
  next: null,
};
update.next = update;
var fiber = {
  memoizedState: {
    queue: { pending: update },
    memoizedState: "value",
    next: null,
  },
  stateNode: "App",
};

var update2 = {
  action: "updateFn",
  next: null,
};

update2.next = fiber.memoizedState.queue.pending;

fiber.memoizedState.queue.pending = update2;

// obj.memoizedState.queue.pending.next = obj.memoizedState.queue.pending;
