import { createElement, render } from "./element.js";
import { diff } from "./diff.js";
import { patch } from "./patch.js";

const vDom1 = createElement("ul", { class: "list" }, [
  createElement("li", { class: "item" }, ["a"]),
  createElement("li", { class: "item" }, ["b"]),
  createElement("li", { class: "item" }, ["c"]),
]);

const vDom2 = createElement("ul", { class: "list" }, [
  createElement("li", { class: "item2" }, ["a"]),
  createElement("div", { class: "item" }, ["b"]),
  createElement("li", { class: "item" }, ["c2"]),
]);

const dom = render(vDom1);
document.body.appendChild(dom);

const patches = diff(vDom1, vDom2);
patch(dom, patches);

console.log(patches);
