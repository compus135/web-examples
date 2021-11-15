function fn(arg): any {
  if (typeof arg === "object") {
    return 1;
  } else {
    return { key: 1 };
  }
}

const r = fn(1);
console.log(r.key);

export {};
