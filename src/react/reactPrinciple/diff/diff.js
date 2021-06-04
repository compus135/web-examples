const allPatches = {};
let INDEX = 0;
function diff(vDom1, vDom2) {
  walk(vDom1, vDom2, INDEX);
  return allPatches;
}

function walk(oldNode, newNode, index) {
  const currentPatches = [];
  if (!newNode) {
    currentPatches.push({ type: "REMOVE" });
  } else if (typeof oldNode === "string" && typeof newNode === "string") {
    if (oldNode !== newNode) {
      currentPatches.push({ type: "TEXT", text: newNode });
    }
  } else if (newNode && oldNode.type === newNode.type) {
    const patch = diffProps(oldNode.props, newNode.props);
    patch && currentPatches.push(patch);
    oldNode.children &&
      oldNode.children.forEach((child, idx) => {
        walk(child, newNode.children && newNode.children[idx], ++INDEX);
      });
  } else {
    currentPatches.push({ type: "REPLACE", newNode });
    INDEX += getTreeCount(oldNode) - 1;
  }
  if (currentPatches.length > 0) {
    allPatches[index] = currentPatches;
  }
}

function diffProps(oldProps, newProps) {
  const patch = {};
  Object.keys(oldProps).forEach((key) => {
    if (oldProps[key] !== newProps[key]) {
      patch.attrs = { [key]: newProps[key] };
    }
  });
  Object.keys(newProps).forEach((key) => {
    if (!oldProps[key]) {
      patch.attrs = { [key]: newProps[key] };
    }
  });
  if (Object.keys(patch).length) {
    patch.type = "ATTRS";
    return patch;
  }
}

function getTreeCount(node) {
  let count = 0;
  if (node.children) {
    node.children.forEach((element) => {
      count += getTreeCount(element);
    });
    count += 1;
  } else {
    count = 1;
  }
  return count;
}

export { diff };
