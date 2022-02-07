// index.js
//import lib from "./lib";
//console.log(lib);
// lib.js
// umd maincopy2.js
(() => {
  var modules = {
    "./src/index.js": (
      __unused_webpack_module,
      __webpack_exports__,
      require
    ) => {
      "use strict";
      eval(
        "require.r(__webpack_exports__);" +
          ' var _lib__WEBPACK_IMPORTED_MODULE_0__ = require( "./src/lib.js");' +
          " var _lib__WEBPACK_IMPORTED_MODULE_0___default = require.n(_lib__WEBPACK_IMPORTED_MODULE_0__);" +
          "console.log((_lib__WEBPACK_IMPORTED_MODULE_0___default()));"
      );
    },

    "./src/lib.js": (module) => {
      eval(
        '// const lib = "libxx";\r\n// export default lib;\r\n// 生成的umd\r\n\r\n(function webpackUniversalModuleDefinition(root, factory) {\r\n  if (true)\r\n    module.exports = factory();\r\n  else {}\r\n})(self, function () {\r\n  return (() => {\r\n    "use strict";\r\n    var modules = {\r\n      "./src/index.js": (\r\n        __unused_webpack_module,\r\n        __webpack_exports__,\r\n        require\r\n      ) => {\r\n        eval(\r\n          "require.r(__webpack_exports__);" +\r\n            \'require.d(__webpack_exports__, { "default": () => (__WEBPACK_DEFAULT_EXPORT__) });\' +\r\n            \'const lib = "libxx";\' +\r\n            "const __WEBPACK_DEFAULT_EXPORT__ = (lib);"\r\n        );\r\n      },\r\n    };\r\n\r\n    var require = {};\r\n\r\n    (() => {\r\n      require.d = (exports, definition) => {\r\n        for (var key in definition) {\r\n          if (require.o(definition, key) && !require.o(exports, key)) {\r\n            Object.defineProperty(exports, key, {\r\n              enumerable: true,\r\n              get: definition[key],\r\n            });\r\n          }\r\n        }\r\n      };\r\n    })();\r\n\r\n    (() => {\r\n      require.o = (obj, prop) =>\r\n        Object.prototype.hasOwnProperty.call(obj, prop);\r\n    })();\r\n\r\n    (() => {\r\n      require.r = (exports) => {\r\n        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {\r\n          Object.defineProperty(exports, Symbol.toStringTag, {\r\n            value: "Module",\r\n          });\r\n        }\r\n        Object.defineProperty(exports, "__esModule", { value: true });\r\n      };\r\n    })();\r\n\r\n    var __webpack_exports__ = {};\r\n    modules["./src/index.js"](0, __webpack_exports__, require);\r\n\r\n    return __webpack_exports__;\r\n  })();\r\n});\r\n// console.log(self.mylib.default); // libxx\r\n\n\n//# sourceURL=webpack://pkg/./src/lib.js?'
      );
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
