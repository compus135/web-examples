class Element {
  constructor(type, props, children) {
    this.type = type;
    this.props = props;
    this.children = children;
  }
}

function createElement(type, props, children) {
  return new Element(type, props, children);
}

function render(vDom) {
  if (typeof vDom === "string") {
    return document.createTextNode(vDom);
  }
  const el = document.createElement(vDom.type);
  setAttrs(el, vDom.props);
  vDom.children.forEach((child) => {
    el.appendChild(render(child));
  });
  return el;
}

function setAttrs(el, props) {
  Object.keys(props).forEach((key) => {
    el.setAttribute(key, props[key]);
  });
}

export { Element, createElement, render };
