// const lib = "libxx";
// export default lib;
// 生成的umd

(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory();
  else if (typeof define === "function" && define.amd) define([], factory);
  else if (typeof exports === "object") exports["mylib"] = factory();
  else root["mylib"] = factory();
})(self, function () {
  return (() => {
    "use strict";
    var modules = {
      "./src/index.js": (
        __unused_webpack_module,
        __webpack_exports__,
        require
      ) => {
        eval(
          "require.r(__webpack_exports__);" +
            'require.d(__webpack_exports__, { "default": () => (__WEBPACK_DEFAULT_EXPORT__) });' +
            'const lib = "libxx";' +
            "const __WEBPACK_DEFAULT_EXPORT__ = (lib);"
        );
      },
    };

    var require = {};

    (() => {
      require.d = (exports, definition) => {
        for (var key in definition) {
          if (require.o(definition, key) && !require.o(exports, key)) {
            Object.defineProperty(exports, key, {
              enumerable: true,
              get: definition[key],
            });
          }
        }
      };
    })();

    (() => {
      require.o = (obj, prop) =>
        Object.prototype.hasOwnProperty.call(obj, prop);
    })();

    (() => {
      require.r = (exports) => {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module",
          });
        }
        Object.defineProperty(exports, "__esModule", { value: true });
      };
    })();

    var __webpack_exports__ = {};
    modules["./src/index.js"](0, __webpack_exports__, require);

    return __webpack_exports__;
  })();
});
console.log(self.mylib.default); // libxx
