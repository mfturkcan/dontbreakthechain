"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chain/viewChain",{

/***/ "./pages/chain/viewChain.tsx":
/*!***********************************!*\
  !*** ./pages/chain/viewChain.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ViewChain = function(props) {\n    var _this1 = _this;\n    var handleEnable = function handleEnable(number) {\n        var theMonth = sampleMonth.filter(function(m) {\n            return m.number === number;\n        })[0];\n        console.log(theMonth);\n        // let theMonth = sampleMonth.at(theIndex) as Month;\n        theMonth.isEnabled = !theMonth.isEnabled;\n        setSampleMonth(function(prevState) {\n            console.log(prevState.length);\n            console.log([\n                theMonth\n            ].concat(_toConsumableArray(prevState)).length);\n            return [\n                theMonth\n            ].concat(_toConsumableArray(prevState));\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), sampleMonth = ref[0], setSampleMonth = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        for(var i = 1; i <= 35; i++){\n            sampleMonth.push({\n                isEnabled: false,\n                number: i\n            });\n        }\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"months\",\n            children: sampleMonth.map(function(m) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: m.isEnabled ? \"month enabled\" : \"month\",\n                    onClick: function(e) {\n                        return handleEnable(m.number);\n                    },\n                    children: m.number\n                }, void 0, false, {\n                    fileName: \"/Users/turkcanoglu/Desktop/Workspace/dontbreakthechain/DontBreakTheChain/client/pages/chain/viewChain.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 32\n                }, _this1));\n            })\n        }, void 0, false, {\n            fileName: \"/Users/turkcanoglu/Desktop/Workspace/dontbreakthechain/DontBreakTheChain/client/pages/chain/viewChain.tsx\",\n            lineNumber: 40,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false));\n};\n_s(ViewChain, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = ViewChain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewChain);\nvar _c;\n$RefreshReg$(_c, \"ViewChain\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGFpbi92aWV3Q2hhaW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPM0MsR0FBSyxDQUFDRSxTQUFTLEdBQUcsUUFBUSxDQUFQQyxLQUFVLEVBQUssQ0FBQzs7UUFldEJDLFlBQVksR0FBckIsUUFBUSxDQUFDQSxZQUFZLENBQUNDLE1BQWMsRUFBRSxDQUFDO1FBQ25DLEdBQUcsQ0FBQ0MsUUFBUSxHQUFVQyxXQUFXLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFSQSxDQUFDO1lBQUlBLE1BQU0sQ0FBTkEsQ0FBQyxDQUFDSixNQUFNLEtBQUtBLE1BQU07V0FBRSxDQUFDO1FBQ3BFSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsUUFBUTtRQUVwQixFQUFvRDtRQUVwREEsUUFBUSxDQUFDTSxTQUFTLElBQUlOLFFBQVEsQ0FBQ00sU0FBUztRQUV4Q0MsY0FBYyxDQUFDQyxRQUFRLENBQVJBLFNBQVMsRUFBSSxDQUFDO1lBQ3pCSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0csU0FBUyxDQUFDQyxNQUFNO1lBQzVCTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDTDtnQkFBQUEsUUFBUTtZQUFjLENBQUMsQ0FBeEIsTUFBd0Isb0JBQVZRLFNBQVMsR0FBRUMsTUFBTTtZQUMzQyxNQUFNLENBQUMsQ0FBQ1Q7Z0JBQUFBLFFBQVE7WUFBYyxDQUFDLENBQXhCLE1BQXdCLG9CQUFWUSxTQUFTO1FBQ2xDLENBQUM7SUFDTCxDQUFDOztJQTFCRCxHQUFLLENBQWlDZCxHQUF1QixHQUF2QkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBMUNPLFdBQVcsR0FBb0JQLEdBQXVCLEtBQXpDYSxjQUFjLEdBQUliLEdBQXVCO0lBRzdEQyxnREFBUyxDQUFDLFFBQ2QsR0FEb0IsQ0FBQztRQUNiLEdBQUcsQ0FBRSxHQUFHLENBQUNlLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsSUFBSSxFQUFFLEVBQUVBLENBQUMsR0FBSSxDQUFDO1lBQzNCVCxXQUFXLENBQUNVLElBQUksQ0FBQyxDQUFDO2dCQUNkTCxTQUFTLEVBQUUsS0FBSztnQkFDaEJQLE1BQU0sRUFBRVcsQ0FBQztZQUNiLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQWtCRCxNQUFNOzhGQUVHRSxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFRO3NCQUVmWixXQUFXLENBQUNhLEdBQUcsQ0FBQ1gsUUFDbkMsQ0FEbUNBLENBQUMsRUFBSSxDQUFDO2dCQUNsQixNQUFNLDZFQUFFUyxDQUFHO29CQUFDQyxTQUFTLEVBQUVWLENBQUMsQ0FBQ0csU0FBUyxHQUFHLENBQWUsaUJBQUcsQ0FBTztvQkFBRVMsT0FBTyxFQUFFQyxRQUFRLENBQVJBLENBQUM7d0JBQUlsQixNQUFNLENBQU5BLFlBQVksQ0FBQ0ssQ0FBQyxDQUFDSixNQUFNOzs4QkFDOUZJLENBQUMsQ0FBQ0osTUFBTTs7Ozs7O1lBRWpCLENBQUM7Ozs7Ozs7QUFLckIsQ0FBQztHQTNDS0gsU0FBUztLQUFUQSxTQUFTO0FBNkNmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhaW4vdmlld0NoYWluLnRzeD9lMzI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIE1vbnRoIHtcbiAgICBpc0VuYWJsZWQ6IGJvb2xlYW4sXG4gICAgbnVtYmVyOiBudW1iZXJcbn1cblxuY29uc3QgVmlld0NoYWluID0gKHByb3BzOiBhbnkpID0+IHtcblxuICAgIGNvbnN0IFtzYW1wbGVNb250aCwgc2V0U2FtcGxlTW9udGhdID0gdXNlU3RhdGUoW10gYXMgTW9udGhbXSk7XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM1OyBpKyspIHtcbiAgICAgICAgICAgIHNhbXBsZU1vbnRoLnB1c2goe1xuICAgICAgICAgICAgICAgIGlzRW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgbnVtYmVyOiBpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pXG5cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUVuYWJsZShudW1iZXI6IG51bWJlcikge1xuICAgICAgICBsZXQgdGhlTW9udGg6IE1vbnRoID0gc2FtcGxlTW9udGguZmlsdGVyKG0gPT4gbS5udW1iZXIgPT09IG51bWJlcilbMF0gYXMgTW9udGg7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoZU1vbnRoKTtcblxuICAgICAgICAvLyBsZXQgdGhlTW9udGggPSBzYW1wbGVNb250aC5hdCh0aGVJbmRleCkgYXMgTW9udGg7XG5cbiAgICAgICAgdGhlTW9udGguaXNFbmFibGVkID0gIXRoZU1vbnRoLmlzRW5hYmxlZDtcblxuICAgICAgICBzZXRTYW1wbGVNb250aChwcmV2U3RhdGUgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJldlN0YXRlLmxlbmd0aCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhbdGhlTW9udGgsIC4uLnByZXZTdGF0ZV0ubGVuZ3RoKTtcbiAgICAgICAgICAgIHJldHVybiBbdGhlTW9udGgsIC4uLnByZXZTdGF0ZV1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9udGhzXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzYW1wbGVNb250aC5tYXAobSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e20uaXNFbmFibGVkID8gXCJtb250aCBlbmFibGVkXCIgOiBcIm1vbnRoXCJ9IG9uQ2xpY2s9e2UgPT4gaGFuZGxlRW5hYmxlKG0ubnVtYmVyKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge20ubnVtYmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXdDaGFpbjtcblxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVmlld0NoYWluIiwicHJvcHMiLCJoYW5kbGVFbmFibGUiLCJudW1iZXIiLCJ0aGVNb250aCIsInNhbXBsZU1vbnRoIiwiZmlsdGVyIiwibSIsImNvbnNvbGUiLCJsb2ciLCJpc0VuYWJsZWQiLCJzZXRTYW1wbGVNb250aCIsInByZXZTdGF0ZSIsImxlbmd0aCIsImkiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwib25DbGljayIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/chain/viewChain.tsx\n");

/***/ })

});