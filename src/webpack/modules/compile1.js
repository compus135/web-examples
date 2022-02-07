// //index.js
// import lib from "./lib"
// console.log("from index",lib);
// //lib.js
// const lib = {key:"value"}
// export default lib;
// 执行lib.js返回exports对象
(() => {
  "use strict";
  var modules = {
    "./src/index.js": (
      __unused_webpack_module,
      __webpack_exports__,
      require
    ) => {
      eval(
        'var _lib__WEBPACK_IMPORTED_MODULE_0__ = require(/*! ./lib */ "./src/lib.js");' +
          'console.log("from index", _lib__WEBPACK_IMPORTED_MODULE_0__["default"]);'
      );
    },

    "./src/lib.js": (__unused_webpack_module, __webpack_exports__, require) => {
      eval(
        'require.d(__webpack_exports__, {"default": () => (__WEBPACK_DEFAULT_EXPORT__) });' +
          'const lib = { key: "value" };' +
          "const __WEBPACK_DEFAULT_EXPORT__ = (lib);"
      );
    },
  };

  (() => {
    require.d = (exports, definition) => {
      for (var key in definition) {
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: definition[key],
        });
      }
    };
  })();

  function require(moduleId) {
    var module = {
      exports: {},
    };
    modules[moduleId](module, module.exports, require);
    return module.exports;
  }

  var __webpack_exports__ = require("./src/index.js");
  console.log(__webpack_exports__);
})();
