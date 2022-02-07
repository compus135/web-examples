// index.js
// import './lib.js'
// lib.js
// var lib = "libxx";
(() => {
  var modules = {
    "./src/index.js": (
      __unused_webpack_module,
      __webpack_exports__,
      require
    ) => {
      "use strict";
      eval(
        "require.r(__webpack_exports__); " +
          'var _lib_js__WEBPACK_IMPORTED_MODULE_0__ = require("./src/lib.js"); ' +
          "var _lib_js__WEBPACK_IMPORTED_MODULE_0___default = require.n(_lib_js__WEBPACK_IMPORTED_MODULE_0__);"
      );
    },

    "./src/lib.js": () => {
      eval('var lib = "libxx";console.log(lib);');
    },
  };

  function require(moduleId) {
    var module = {
      exports: {},
    };
    modules[moduleId](module, module.exports, require);
    return module.exports;
  }

  (() => {
    require.n = (module) => {
      var getter =
        module && module.__esModule ? () => module["default"] : () => module;
      require.d(getter, { a: getter });
      return getter;
    };
  })();

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
    require.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
  })();

  (() => {
    require.r = (exports) => {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
      }
      Object.defineProperty(exports, "__esModule", { value: true });
    };
  })();
  var __webpack_exports__ = require("./src/index.js");
})();
