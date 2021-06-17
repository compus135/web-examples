function render(vDom, element) {
  const TAG_HOST = "TAG_HOST";
  const PLACEMENT = "PLACEMENT";
  const rootFiber = {
    tag: TAG_HOST,
    key: "root",
    stateNode: element,
    props: {
      children: [vDom],
    },
  };
  let workInProgress = rootFiber;
  function workLoop() {
    while (workInProgress) {
      workInProgress = performUnitOfWork(workInProgress);
    }
    console.log("rootFiber", rootFiber);
    commitRoot();
  }
  function commitRoot() {
    debugger;
    let effect = rootFiber.firstEffect;
    while (effect) {
      if (effect.flags === PLACEMENT) {
        commitPlacement(effect);
      }
      effect = effect.nextEffect;
    }
  }

  function commitPlacement(effect) {
    effect.return.stateNode.appendChild(effect.stateNode);
  }
  function performUnitOfWork(workInProgress) {
    beginWork(workInProgress);
    if (workInProgress.child) {
      return workInProgress.child;
    }
    while (workInProgress) {
      completeUnitOfWork(workInProgress);
      if (workInProgress.sibling) {
        return workInProgress.sibling;
      }
      workInProgress = workInProgress.return;
    }
  }
  function completeUnitOfWork(workInProgress) {
    switch (workInProgress.flags) {
      case PLACEMENT:
        createStateNode(workInProgress);
        break;

      default:
        break;
    }
    makeEffectList(workInProgress);
  }
  function createStateNode(workInProgress) {
    const element = document.createElement(workInProgress.type);
    setProps(element, workInProgress.props);
    workInProgress.stateNode = element;
  }
  function setProps(element, props) {
    element.setAttribute(
      "style",
      "border:1px solid red;margin:20px;min-height:100px"
    );
  }
  function makeEffectList(completeFiber) {
    const returnFiber = completeFiber.return;
    if (returnFiber) {
      if (returnFiber.firstEffect) {
        if (completeFiber.firstEffect) {
          returnFiber.lastEffect.nextEffect = completeFiber.firstEffect;
          returnFiber.lastEffect = completeFiber.lastEffect;
        }
      } else {
        if (completeFiber.firstEffect) {
          returnFiber.firstEffect = completeFiber.firstEffect;
          returnFiber.lastEffect = completeFiber.lastEffect;
        }
      }
      if (completeFiber.flags) {
        if (!returnFiber.firstEffect) {
          returnFiber.firstEffect = completeFiber;
        }
        if (returnFiber.lastEffect) {
          returnFiber.lastEffect.nextEffect = completeFiber;
        }
        returnFiber.lastEffect = completeFiber;
      }
    }
  }
  function beginWork(workInProgress) {
    reconcileChildren(workInProgress, workInProgress.props.children);
  }
  function reconcileChildren(returnFiber, children) {
    let firstFiber;
    let previousFiber;
    children.forEach((element) => {
      const newFiber = createFiber(element);
      newFiber.flags = PLACEMENT;
      newFiber.return = returnFiber;
      if (!firstFiber) {
        firstFiber = newFiber;
      } else {
        previousFiber.sibling = newFiber;
      }
      previousFiber = newFiber;
    });
    if (firstFiber) returnFiber.child = firstFiber;
  }
  function createFiber(vDom) {
    return {
      tag: TAG_HOST,
      type: "div",
      key: vDom.key,
      props: vDom.props,
    };
  }
  workLoop();
}
const vDom = {
  type: "div",
  key: "A",
  props: {
    children: [
      {
        type: "div",
        key: "B1",

        props: {
          children: [],
        },
      },
      {
        type: "div",
        key: "B2",
        props: {
          children: [],
        },
      },
    ],
  },
};
render(vDom, document.getElementById("root"));
