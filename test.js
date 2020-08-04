const path = {
  name: "a",
  child: {
    name: "b",
    child: {
      name: "c",
      child: {
        name: "d",
      },
    },
  },
};

const getPath = (obj) => {
  if (!obj.child) {
    return obj.name;
  } else {
    return obj.name + "/" + getPath(obj.child);
  }
};

const curry = (fn) => {
  return function curriedFn(...args) {
    if (fn.length === args.length) {
      return fn.apply(null, args);
    }
    return function () {
      return curriedFn.apply(null, args.concat([].slice.call(arguments)));
    };
  };
};

function add(a) {
  return a;
}

console.log(curry(add)(3));
