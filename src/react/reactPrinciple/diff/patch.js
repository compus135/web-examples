import { Element, render } from "./element.js";
let INDEX = 0;
let allPatches = {};
function patch(dom, patches) {
  allPatches = patches;
  walk(dom);
}

function walk(dom) {
  if (allPatches[INDEX]) {
    doPatch(dom, allPatches[INDEX]);
  }
  dom.childNodes.forEach((child) => {
    ++INDEX;
    walk(child);
  });
}

function doPatch(node, patches) {
  patches.forEach((patch) => {
    switch (patch.type) {
      case "REMOVE":
        node.parentNode.removeChild(node);
        break;
      case "REPLACE":
        const newNode =
          patch.newNode instanceof Element
            ? render(patch.newNode)
            : document.createTextNode(patch.newNode);
        node.parentNode.replaceChild(newNode, node);
        break;
      case "ATTRS":
        setAttr(node, patch.attrs);
        break;
      case "TEXT":
        node.textContent = patch.text;
        break;
      default:
        break;
    }
  });
}

function setAttr(node, attrs) {
  for (const key in attrs) {
    node.setAttribute(key, attrs[key]);
  }
}
export { patch };
