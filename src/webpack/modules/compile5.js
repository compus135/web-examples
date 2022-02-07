// umd eval代码
(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();
  else {
  }
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
